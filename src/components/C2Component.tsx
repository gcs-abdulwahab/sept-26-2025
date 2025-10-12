import { useState } from "react";

const C2Component = () => {
    // keep input as string so user can clear the field without forcing 0
    const [celsius, setCelsius] = useState<number>(0);

    const celsiusNum = celsius as number;
    const isValid = !Number.isNaN(celsiusNum);
    const fahrenheit = isValid ? celsiusNum * (9 / 5) + 32 : NaN;

    const formatNumber = (v: number) => {
        if (!Number.isFinite(v)) return "";
        // round to 2 decimal places, drop trailing zeros
        return (Math.round(v * 100) / 100).toString();
    };

    return (
        <div>
            <h1>Fahrenheit: {formatNumber(fahrenheit)}</h1>

            <label style={{ display: "block", marginTop: 8 }}>
                Celsius:
                <input
                    type="number"
                    step="any"
                    value={celsius}
                    onChange={(e) => setCelsius(Number(e.target.value))}
                    style={{ marginLeft: 8 }}
                />
            </label>

            <br />
        </div>
    );
};

export default C2Component;
