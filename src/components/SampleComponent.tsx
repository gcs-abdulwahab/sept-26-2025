interface SampleComponentProps {
    n: number;
    m: number;
    total: number;
}
const SampleComponent = ({ n, m, total }: SampleComponentProps) => {
    // function kmsToText(n: number): string {
    //     const kms = Math.floor(n);
    //     const meters = (n * 1000) % 1000;
        
    //     const kmText = kms > 0 ? `${kms} ${kms === 1 ? 'Kilometer' : 'Kilometers'}` : '';
    //     const meterText = meters > 0 ? `${meters} ${meters === 1 ? 'Meter' : 'Meters'}` : '';
        
    //     if (kmText && meterText) return `${kmText} and ${meterText}`;
    //     return kmText || meterText;
    // }

    function isHalf(n: number, m: number , total: number): boolean {
        return Math.abs((n + m) - total / 2) < Number.EPSILON;
    }


	return <div>SampleComponent {isHalf(-0.1, -0.2, -0.6) ? 'is half' : 'is not half'} </div>;
};

export default SampleComponent;
