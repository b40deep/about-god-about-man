"use client";
import Swipeout from "rc-swipeout";
// import "rc-swipeout/assets/index.less"; // (web only)
let state = {
    items: ["00", "01", "02", "03", "04", "05"],
};
let onDelete = (value) => {
    const tempArr = this.state.items;
    this.setState({
        items: tempArr.filter((v) => v !== value),
    });
};
export default function Swipe() {
    return (
        <div>
            <p style={{ padding: "16px 30px" }}>多个实例：</p>
            {this.state.items.map((item, i) => (
                <Swipeout
                    autoClose
                    key={i}
                    right={[
                        {
                            text: `删除${item}`,
                            onPress: () => this.onDelete(item),
                            style: {
                                backgroundColor: "#F4333C",
                                color: "white",
                                width: 80,
                            },
                        },
                    ]}
                >
                    <div
                        style={{
                            padding: "16px 30px",
                            borderBottom: "1px solid #ccc",
                        }}
                        onClick={() => {
                            console.log(`pressed item ${item}`);
                        }}
                    >
                        item {item}
                    </div>
                </Swipeout>
            ))}
        </div>
    );
}
