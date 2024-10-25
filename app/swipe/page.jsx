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
import { useState, useRef, useEffect } from "react";

export default function Swipe() {
    const elementRef = useRef(null);

    // Function to handle mouse events and synthesize touch events
    function reactAsTouch(event) {
        let touchEvent = null;
        switch (event.type) {
            case "mouseenter":
            case "mousedown":
                touchEvent = new TouchEvent("touchstart", {
                    bubbles: true, // Ensure the event bubbles
                    cancelable: true, // Allow the event to be canceled
                    touches: [{ pageX: event.clientX, pageY: event.clientY }],
                });
                break;

            case "mouseup":
                touchEvent = new TouchEvent("touchend", {
                    bubbles: true,
                    cancelable: true,
                    touches: [], // No touches should be present on touchend
                });
                break;

            case "mouseleave":
                // No corresponding touch event exists for mouseleave.
                return;

            default:
                console.error(`Unsupported mouse event type: ${event.type}`);
                return;
        }

        if (touchEvent) {
            // Dispatch the synthesized touch event to the target element.
            event.target.dispatchEvent(touchEvent);

            // Prevent the original mouse event from being processed further.
            event.stopPropagation();
            event.preventDefault();
        }
    }

    useEffect(() => {
        // Access the DOM element after the component mounts
        const element = elementRef.current;

        if (element) {
            // Add event listeners
            element.addEventListener("mouseenter", reactAsTouch);
            element.addEventListener("mousedown", reactAsTouch);
            element.addEventListener("mouseup", reactAsTouch);

            // Cleanup function to remove event listeners
            return () => {
                element.removeEventListener("mouseenter", reactAsTouch);
                element.removeEventListener("mousedown", reactAsTouch);
                element.removeEventListener("mouseup", reactAsTouch);
            };
        }
    }, []); // Empty dependency array means this runs once after the component mounts

    // const element = document.getElementById("body");

    console.log("Imported SomeModule:", Swipeout);
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
        <div ref={elementRef}>
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
                                backgroundColor: "#d1c97b",
                                color: "white",
                                width: 80,
                            },
                        },
                        {
                            text: `some text${item}`,
                            onPress: () => onChange(item),
                            style: {
                                backgroundColor: "#bababa",
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
