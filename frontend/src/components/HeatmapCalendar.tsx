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
      details.push('Peak Day - Høyeste trafikk');
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
            const isDimmed = hoveredDay !== null && !isHovered;
            const isPeak = dayData.activity === maxActivity;
            const activityText = getActivityText(dayData.activity);

            return (
                <div
                    key={dayData.day}
                    className={`
                    relative flex-1 transition-all duration-200
                    ${isDimmed ? "opacity-50" : ""}
                    `}
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
                  ${isHovered ? "scale-110 shadow-lg ring-2 ring-primary-cyan" : "scale-90"}
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
        {/* TOOLTIP - MiniBarChart styling med alt original innhold */}
        {hoveredDay && (
            <div
                className="fixed z-[9999] pointer-events-none"
                style={{
                  left: `${tooltipX}px`,
                  top: `${tooltipY}px`,
                  transform: 'translate(-50%, calc(-100% - 16px))',
                }}
            >
              <div className="animate-fade-in">
                <div className="bg-dark-bg/95 border border-primary-cyan rounded-lg px-4 py-3 shadow-glow-cyan backdrop-blur-sm min-w-[220px]">
                  {/* Header med dag og trophy */}
                  <div className="font-bold text-base mb-2 pb-2 border-b border-gray-700 flex items-center justify-between">
                    <span className="text-white">{hoveredDay.day}</span>
                    {hoveredDay.activity === maxActivity && <span className="text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" className="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round"
                      d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"/>
                      </svg>

                    </span>}
                  </div>

                  {/* Activity Stats */}
                  <div className="space-y-1.5 mb-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Aktivitet:</span>
                      <span className="font-semibold text-primary-cyan text-sm">{hoveredDay.activity}%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm">Nivå:</span>
                      <span className="font-semibold text-white text-sm">{getActivityText(hoveredDay.activity)}</span>
                    </div>
                  </div>

                  {/* Anbefalinger */}
                  <div className="space-y-1 text-xs text-gray-300 border-t border-gray-700 pt-2">
                    {getDetailedInfo(hoveredDay.activity, hoveredDay.activity === maxActivity).map((info, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-primary-cyan mt-0.5">•</span>
                          <span>{info}</span>
                        </div>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-dark-bg/95 border-r border-b border-primary-cyan rotate-45" />
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
