interface AqsaComponentProps{
    x: number
    y: number

}
const AqsaComponent = ({ x, y }: AqsaComponentProps) => {
     function add(a:number,b:number) {
         return a + b;
    }
    function avg(c: number, d: number) {
        return c * d;
        
    }
    function isEven(n: number) {
        if (n%2==0) {
            return "Even Number";
        } else {
            return "Odd Number";
        }
        
    }
  return (
     
      <div>AqsaComponent: x={x}, y={y}, avg={avg(5, 3)}, add={add(x, y)}, isEven(5)={isEven(5)}</div>
      
  )
}

export default AqsaComponent