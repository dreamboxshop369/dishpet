"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: string;
  title: string;
}

export default function CountdownTimer({ targetDate, title }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "Dana", value: timeLeft.days },
    { label: "Sati", value: timeLeft.hours },
    { label: "Minuta", value: timeLeft.minutes },
    { label: "Sekundi", value: timeLeft.seconds },
  ];

  return (
    <div className="text-center">
      <h2 className="font-display text-2xl md:text-3xl text-white mb-2">{title}</h2>
      <p className="text-white/90 mb-8">do početka programa</p>
      
      <div className="flex justify-center space-x-4 md:space-x-8">
        {timeUnits.map((unit, index) => (
          <div key={unit.label} className="text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[100px]">
              <div className="text-2xl md:text-4xl font-bold text-white font-display">
                {unit.value.toString().padStart(2, "0")}
              </div>
              <div className="text-white/80 text-sm md:text-base mt-2">
                {unit.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
