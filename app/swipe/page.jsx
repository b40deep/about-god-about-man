// "use client";
// import Swipeout from "rc-swipeout";
// import React, { useState } from "react";

// const SwipePage = () => {
//     const [items, setItems] = useState(["00", "01", "02", "03", "04", "05"]);
//     return <div>SwipePage</div>;
// };

// export default SwipePage;

"use client";
import Swipeout from "rc-swipeout";
import "rc-swipeout/assets/index.css"; // (web only)
import { useState } from "react";

export default function Swipe() {
    let [items, setItems] = useState({
        items: ["00", "01", "02", "03", "04", "05"],
    });
    let onDelete = (value) => {
        const tempArr = items.items;
        setItems({
            items: tempArr.filter((v) => v !== value),
        });
    };
    let onChange = (value) => {
        const tempArr = items.items;
        console.log(`changed ${value}`);
    };
    return (
        <div>
            <p style={{ padding: "16px 30px" }}>some heading here：</p>
            {items.items.map((item, i) => (
                <Swipeout
                    autoClose
                    key={i}
                    left={[
                        {
                            text: `some text${item}`,
                            onPress: () => onDelete(item),
                            style: {
                                backgroundColor: "#F4333C",
                                color: "white",
                                width: 80,
                            },
                        },
                        {
                            text: `some text${item}`,
                            onPress: () => onChange(item),
                            style: {
                                backgroundColor: "orange",
                                color: "white",
                                width: 80,
                            },
                        },
                    ]}
                    right={[
                        {
                            text: `some text${item}`,
                            onPress: () => onChange(item),
                            style: {
                                backgroundColor: "yellow",
                                color: "white",
                                width: 80,
                            },
                        },
                        {
                            text: `some text${item}`,
                            onPress: () => onChange(item),
                            style: {
                                backgroundColor: "#",
                                color: "white",
                                width: 80,
                            },
                        },
                    ]}
                    onOpen={() =>
                        console.log(
                            "open, use this to connect next notes to prior ones [like 'Reply' in Whatsapp]"
                        )
                    }
                    onClose={() => console.log("close")}
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
