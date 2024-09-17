"use client";
import Swipeout from "rc-swipeout";
// import "rc-swipeout/assets/index.less"; // (web only)

export default function Swipe() {
    <Swipeout
        left={[
            {
                text: "reply",
                onPress: () => console.log("reply"),
                style: { backgroundColor: "orange", color: "white" },
                className: "custom-class-1",
            },
        ]}
        right={[
            {
                text: "delete",
                onPress: () => console.log("delete"),
                style: { backgroundColor: "red", color: "white" },
                className: "custom-class-2",
            },
        ]}
        onOpen={() => console.log("open")}
        onClose={() => console.log("close")}
    >
        <div style={{ height: 44 }}> swipeout demo </div>
    </Swipeout>;

    return (
        <div>
            <Swipeout>does it work?</Swipeout>
        </div>
    );
}
