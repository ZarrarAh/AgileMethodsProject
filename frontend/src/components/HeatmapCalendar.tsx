import { useState } from "react";

interface DayData {
  day: string;
  dayShort: string;
  activity: number;
}

interface HeatmapCalendarProps {
  data?: DayData[];
}

const HeatmapCalendar = ({ data }: HeatmapCalendarProps) => {
  const [hoveredDay, setHoveredDay] = useState<DayData | null>(null);
  const [tooltipX, setTooltipX] = useState(0);
  const [tooltipY, setTooltipY] = useState(0);

  const defaultData: DayData[] = [
    { day: "Mandag", dayShort: "M", activity: 60 },
    { day: "Tirsdag", dayShort: "T", activity: 70 },
    { day: "Onsdag", dayShort: "O", activity: 80 },
    { day: "Torsdag", dayShort: "T", activity: 90 },
    { day: "Fredag", dayShort: "F", activity: 75 },
    { day: "Lørdag", dayShort: "L", activity: 50 },
    { day: "Søndag", dayShort: "S", activity: 40 },
  ];

  const days = data ?? defaultData;
  const maxActivity = Math.max(...days.map((d) => d.activity));

  const getActivityText = (activity: number) => {
    if (activity >= 90) return "Svært høy";
    if (activity >= 70) return "Høy";
    if (activity >= 50) return "Middels";
    return "Lav";
  };

  const getDetailedInfo = (activity: number, isPeak: boolean) => {
    const details = [];
    if (isPeak) {
      details.push('🏆 Peak Day - Høyeste trafikk');
    }
    if (activity >= 90) {
      details.push('Anbefales ekstra bemanning');
      details.push('Optimal dag for kampanjer');
    } else if (activity >= 70) {
      details.push('God trafikk forventet');
      details.push('Normal bemanning anbefales');
    } else if (activity >= 50) {
      details.push('Moderat trafikk');
      details.push('Vurder redusert bemanning');
    } else {
      details.push('Lav trafikk forventet');
      details.push('Mulighet for vedlikehold');
    }
    return details;
  };

  const getOpacity = (activity: number) => {
    return 0.2 + (activity / 100) * 0.8;
  };

  const handleMouseEnter = (dayData: DayData, e: React.MouseEvent) => {
    setHoveredDay(dayData);
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipX(rect.left + rect.width / 2);
    setTooltipY(rect.top);
  };

  return (
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-400">
          Ukesoversikt
        </h3>

        <div className="flex gap-2 justify-between">
          {days.map((dayData) => {
            const isHovered = hoveredDay?.day === dayData.day;
            const isPeak = dayData.activity === maxActivity;
            const activityText = getActivityText(dayData.activity);

            return (
                <div
                    key={dayData.day}
                    className="relative flex-1"
                    onMouseEnter={(e) => handleMouseEnter(dayData, e)}
                    onMouseLeave={() => setHoveredDay(null)}
                >
                  <div
                      className={`
                  h-24 rounded-lg flex flex-col items-center justify-center
                  px-2 py-2 cursor-pointer transition-all duration-300
                  ${isPeak
                          ? "bg-primary-cyan shadow-glow-cyan"
                          : "bg-primary-cyan"
                      }
                  ${isHovered ? "scale-110 shadow-lg ring-2 ring-primary-cyan" : "scale-100"}
                  text-dark-bg
                `}
                      style={{
                        opacity: isPeak ? 1 : getOpacity(dayData.activity),
                      }}
                  >
                <span className="text-2xl font-bold mb-1">
                  {dayData.dayShort}
                </span>
                    <div className="text-[10px] leading-tight text-center font-medium opacity-90">
                      <div>{activityText}</div>
                      <div className="text-xs font-semibold">{dayData.activity}%</div>
                    </div>
                  </div>
                </div>
            );
          })}
        </div>

        {/* FIXED TOOLTIP - Går ALDRI utenfor! */}
        {hoveredDay && (
            <div
                className="fixed z-[9999] pointer-events-none"
                style={{
                  left: `${tooltipX}px`,
                  top: `${tooltipY}px`,
                  transform: 'translate(-50%, calc(-100% - 10px))',
                }}
            >
              <div className="bg-dark-bg/95 backdrop-blur-sm border-2 border-primary-cyan rounded-lg shadow-xl px-4 py-3 min-w-[200px]">
                <div className="font-bold text-base mb-2 pb-2 border-b border-gray-700 flex items-center justify-between text-white">
                  <span>{hoveredDay.day}</span>
                  {hoveredDay.activity === maxActivity && <span className="text-xl">🏆</span>}
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Aktivitet:</span>
                    <span className="font-semibold text-primary-cyan">{hoveredDay.activity}%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Nivå:</span>
                    <span className="font-semibold text-white">{getActivityText(hoveredDay.activity)}</span>
                  </div>
                </div>

                <div className="space-y-1 text-xs text-gray-300 border-t border-gray-700 pt-2">
                  {getDetailedInfo(hoveredDay.activity, hoveredDay.activity === maxActivity).map((info, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-primary-cyan mt-0.5">•</span>
                        <span>{info}</span>
                      </div>
                  ))}
                </div>
              </div>
            </div>
        )}

        {/* Legend */}
        <div className="flex items-center justify-center text-xs text-gray-400 pt-2">
          <div className="flex gap-1">
            {[20, 40, 60, 80, 100].map((value) => (
                <div
                    key={value}
                    className="w-4 h-4 rounded bg-primary-cyan"
                    style={{ opacity: getOpacity(value) }}
                />
            ))}
          </div>
        </div>
      </div>
  );
};

export default HeatmapCalendar;
