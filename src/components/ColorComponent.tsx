import { useState } from "react";

const ALLOWED_COLORS = [
    "red",
    "green",
    "blue",
    "orange",
    "pink",
    "brown",
    "amber",
    "cyan",
];

const randomFromList = (list: string[]) => list[Math.floor(Math.random() * list.length)];

const ColorComponent = () => {
    const [colorInput, setColorInput] = useState<string>("");
    const [bg, setBg] = useState<string>("white");

    const applyColor = (c: string) => {
        const normalized = c.trim().toLowerCase();
        if (ALLOWED_COLORS.includes(normalized)) {
            setBg(normalized);
        }
    };

    return (
        <div style={{ padding: 16, background: bg, color: "white" }}>
            <label style={{ display: "block", marginBottom: 8 }}>
                Enter color (allowed: {ALLOWED_COLORS.join(", ")}):
                <input
                    value={colorInput}
                    onChange={(e) => {
                        setColorInput(e.target.value);
                        // live apply when user types a valid color
                        applyColor(e.target.value);
                    }}
                    style={{ marginLeft: 8 }}
                />
            </label>

            <button
                onClick={() => setBg(randomFromList(ALLOWED_COLORS))}
                style={{ padding: "8px 12px", borderRadius: 4 }}
            >
                Random Color
            </button>

            <div style={{ marginTop: 12 }}>
                Current background: <strong>{bg}</strong>
            </div>
        </div>
    );
};

export default ColorComponent;
