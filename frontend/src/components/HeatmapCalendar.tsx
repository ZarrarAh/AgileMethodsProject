import { useState } from "react";

interface DayData {
  day: string;      // Fullt navn: "Mandag"
  dayShort: string; // Kort navn: "M"
  activity: number; // 0–100
}

interface HeatmapCalendarProps {
  // Hvis du ikke sender inn data, brukes en enkel standardliste
  data?: DayData[];
}

const HeatmapCalendar = ({ data }: HeatmapCalendarProps) => {
  // Hvilken dag brukeren holder over / har klikket på
  const [hoveredDay, setHoveredDay] = useState<string | null>(null);

  const defaultData: DayData[] = [
    { day: "Mandag",  dayShort: "M", activity: 60 },
    { day: "Tirsdag", dayShort: "T", activity: 70 },
    { day: "Onsdag",  dayShort: "O", activity: 80 },
    { day: "Torsdag", dayShort: "T", activity: 90 },
    { day: "Fredag",  dayShort: "F", activity: 75 },
    { day: "Lørdag",  dayShort: "L", activity: 50 },
    { day: "Søndag",  dayShort: "S", activity: 40 },
  ];

  const days = data ?? defaultData;

  // Finn høyeste aktivitet – brukes til å markere "peak day"
  const maxActivity = Math.max(...days.map((d) => d.activity));

  // Veldig enkel funksjon for å gjøre aktiviteten litt mer lesbar
  const getActivityText = (activity: number) => {
    if (activity >= 90) return "Svært høy";
    if (activity >= 70) return "Høy";
    if (activity >= 50) return "Middels";
    return "Lav";
  };

  // Get detailed activity info for tooltip
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

  // Gjør aktiviteten om til "styrke" (opacity)
  const getOpacity = (activity: number) => {
    return 0.2 + (activity / 100) * 0.8;
  };

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
        Ukesoversikt
      </h3>

      <div className="flex gap-2 justify-between">
        {days.map((dayData) => {
          const isHovered = hoveredDay === dayData.day;
          const isPeak = dayData.activity === maxActivity;
          const activityText = getActivityText(dayData.activity);

          return (
            <div
              key={dayData.day}
              className="relative flex-1"
              onMouseEnter={() => setHoveredDay(dayData.day)}
              onMouseLeave={() => setHoveredDay(null)}
              onClick={() =>
                setHoveredDay(isHovered ? null : dayData.day)
              }
            >
              {/* Selve boksen */}
              <div
                className={`
                  h-24 rounded-lg flex flex-col items-center justify-center
                  px-2 py-2 cursor-pointer transition-all duration-300
                  ${isPeak 
                    ? "bg-primary-blue dark:bg-primary-cyan shadow-glow-blue dark:shadow-glow-cyan" 
                    : "bg-primary-blue dark:bg-primary-cyan"
                  }
                  ${isHovered ? "scale-110 shadow-lg ring-2 ring-primary-blue dark:ring-primary-cyan" : "scale-100"}
                  text-white dark:text-gray-900
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

              {/* Enkel tooltip */}
              {isHovered && (
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 z-10 animate-fade-in">
                  <div className="bg-gray-800 dark:bg-gray-900 text-white text-sm px-4 py-3 rounded-lg shadow-xl whitespace-nowrap min-w-[200px] border border-gray-700 dark:border-gray-800">
                    <div className="font-bold text-base mb-2 pb-2 border-b border-gray-700 dark:border-gray-800 flex items-center justify-between">
                      <span>{dayData.day}</span>
                      {isPeak && <span className="text-xl">🏆</span>}
                    </div>
                    
                    {/* Activity Stats */}
                    <div className="space-y-2 mb-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Aktivitet:</span>
                        <span className="font-semibold text-primary-cyan">{dayData.activity}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">Nivå:</span>
                        <span className="font-semibold">{activityText}</span>
                      </div>
                    </div>

                    {/* Anbefalinger/Tiltak */}
                    <div className="space-y-1 text-xs text-gray-300 border-t border-gray-700 dark:border-gray-800 pt-2">
                      {getDetailedInfo(dayData.activity, isPeak).map((info, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-primary-cyan mt-0.5">•</span>
                          <span>{info}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tooltip arrow */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-b-gray-800 dark:border-b-gray-900"></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Enkel "legend" */}
      <div className="flex items-center justify-center text-xs text-gray-600 dark:text-gray-400 pt-2">
        <div className="flex gap-1">
          {[20, 40, 60, 80, 100].map((value) => (
            <div
              key={value}
              className="w-4 h-4 rounded bg-primary-blue dark:bg-primary-cyan"
              style={{ opacity: getOpacity(value) }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeatmapCalendar;