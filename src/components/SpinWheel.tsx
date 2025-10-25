import { Button } from "@/components/ui/button";
import { Play, RotateCw } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

interface WheelSection {
  id: number;
  label: string;
  colorClass: string;
}

const defaultSections: WheelSection[] = [
  { id: 1, label: "Option 1", colorClass: "fill-wheel-blue" },
  { id: 2, label: "Option 2", colorClass: "fill-wheel-purple" },
  { id: 3, label: "Option 3", colorClass: "fill-wheel-pink" },
  { id: 4, label: "Option 4", colorClass: "fill-wheel-yellow" },
];

export const SpinWheel = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [sections] = useState<WheelSection[]>(defaultSections);
  const wheelRef = useRef<HTMLDivElement>(null);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    
    // Calculate random rotation (multiple full spins + random final position)
    const minSpins = 5;
    const maxSpins = 8;
    const spins = minSpins + Math.random() * (maxSpins - minSpins);
    const finalRotation = spins * 360;
    
    // Add current rotation to maintain continuity
    const newRotation = rotation + finalRotation;
    setRotation(newRotation);

    // Determine winner after animation
    setTimeout(() => {
      const normalizedRotation = newRotation % 360;
      const sectionAngle = 360 / sections.length;
      // Adjust for the pointer at top (270 degrees offset)
      const adjustedRotation = (normalizedRotation + 90) % 360;
      const winnerIndex = Math.floor(adjustedRotation / sectionAngle);
      const winner = sections[winnerIndex];
      
      toast.success(`🎉 You got ${winner.label}!`, {
        description: "Congratulations!",
        duration: 5000,
      });
      
      setIsSpinning(false);
    }, 4000);
  };

  const resetWheel = () => {
    if (isSpinning) return;
    setRotation(0);
    toast.info("Wheel reset!");
  };

  const sectionAngle = 360 / sections.length;

  return (
    <div className="flex flex-col items-center gap-8 p-4 md:p-8">
      {/* Wheel Container */}
      <div className="relative">
        {/* Pointer/Arrow at top */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-20">
          <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-primary drop-shadow-lg" />
        </div>

        {/* Wheel */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full shadow-2xl">
          <div
            ref={wheelRef}
            className="w-full h-full rounded-full relative transition-transform"
            style={{
              transform: `rotate(${rotation}deg)`,
              transitionDuration: isSpinning ? "4s" : "0.3s",
              transitionTimingFunction: isSpinning
                ? "cubic-bezier(0.17, 0.67, 0.12, 0.99)"
                : "ease-out",
            }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full -rotate-90">
              {sections.map((section, index) => {
                const startAngle = (index * sectionAngle * Math.PI) / 180;
                const endAngle = ((index + 1) * sectionAngle * Math.PI) / 180;
                
                const x1 = 200 + 200 * Math.cos(startAngle);
                const y1 = 200 + 200 * Math.sin(startAngle);
                const x2 = 200 + 200 * Math.cos(endAngle);
                const y2 = 200 + 200 * Math.sin(endAngle);

                const largeArcFlag = sectionAngle > 180 ? 1 : 0;

                // Calculate text position and rotation
                const midAngle = startAngle + (endAngle - startAngle) / 2;
                const textRadius = 130;
                const textX = 200 + textRadius * Math.cos(midAngle);
                const textY = 200 + textRadius * Math.sin(midAngle);
                const textRotation = (midAngle * 180) / Math.PI + 90;

                return (
                  <g key={section.id}>
                    <path
                      d={`M 200 200 L ${x1} ${y1} A 200 200 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                      className={`${section.colorClass} stroke-white stroke-[4]`}
                    />
                    <text
                      x={textX}
                      y={textY}
                      className="fill-slate-800 font-bold"
                      fontSize="24"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      transform={`rotate(${textRotation} ${textX} ${textY})`}
                    >
                      {section.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Center Button */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button
                onClick={spinWheel}
                disabled={isSpinning}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform disabled:opacity-50 disabled:cursor-not-allowed border-4 border-border"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 text-primary fill-primary ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={spinWheel}
          disabled={isSpinning}
          size="lg"
          className="gap-2"
        >
          <Play className="w-5 h-5" />
          {isSpinning ? "Spinning..." : "Spin the Wheel"}
        </Button>
        <Button
          onClick={resetWheel}
          disabled={isSpinning}
          variant="outline"
          size="lg"
          className="gap-2"
        >
          <RotateCw className="w-5 h-5" />
          Reset
        </Button>
      </div>
    </div>
  );
};
