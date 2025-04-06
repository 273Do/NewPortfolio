"use client";

import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";
interface Activity {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const selectLastSevenWeeks = (contributions: Array<Activity>) => {
  const today = new Date();
  const sevenWeeksAgo = new Date(today.getTime() - 6 * 7 * 24 * 60 * 60 * 1000); // 7週間前の日付

  return contributions.filter((activity: Activity) => {
    const date = new Date(activity.date);
    return date >= sevenWeeksAgo && date <= today;
  });
};
const explicitTheme = {
  light: ["#eeeeee", "#27272a"],
  dark: ["#27272a", "#eeeeee"],
};

const GitCalendar = () => {
  const { theme } = useTheme();

  return (
    <div className="border p-4 rounded-lg">
      <div className="hidden sm:block">
        <GitHubCalendar
          username="273Do"
          // transformData={selectLastSevenWeeks}
          blockMargin={7}
          blockSize={13}
          hideColorLegend={true}
          hideMonthLabels={true}
          hideTotalCount={true}
          loading={false}
          theme={explicitTheme}
          colorScheme={theme as "light" | "dark" | undefined}
        />
      </div>
      <div className="block sm:hidden">
        <GitHubCalendar
          username="273Do"
          // transformData={selectLastSevenWeeks}
          blockMargin={6.5}
          blockSize={8.5}
          hideColorLegend={true}
          hideMonthLabels={true}
          hideTotalCount={true}
          loading={false}
          theme={explicitTheme}
          colorScheme={theme as "light" | "dark" | undefined}
        />
      </div>
    </div>
  );
};

export default GitCalendar;
