import { GitHubCalendar } from "react-github-calendar";
import type { ThemeInput, Activity } from "react-activity-calendar";

export default function GitHubContributions() {
  const githubTheme: ThemeInput = {
    light: ["#e8e8e8", "#c3b0ff", "#a387f7", "#8565EA", "#6042b5"],
    dark: ["#1a1a1a", "#3e2f74", "#6042b5", "#8565EA", "#c3b0ff"],
  };

  return (
    <div className="w-full md:w-fit mx-auto mt-10 px-4 md:px-0">
      <h3 className="text-2xl font-rubik text-white/90 font-normal text-center mb-6">My Code Climate Report</h3>
      <div className="github-calendar w-full md:w-fit">
        <GitHubCalendar
            username="Ezekwu"
            theme={githubTheme}
            blockSize={12}
            blockMargin={4}
            fontSize={14}
            tooltips={{
              activity: {
                text: (activity: Activity) => {
                  const date = new Date(activity.date);
                  const formattedDate = date.toLocaleDateString('en-US', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  });
                  return `${activity.count} contribution${activity.count !== 1 ? 's' : ''} on ${formattedDate}`;
                },
              },
              colorLegend: {
                text: (level: number) => {
                  const labels = ['No contributions', '1-9 contributions', '10-19 contributions', '20-29 contributions', '30+ contributions'];
                  return labels[level] || `${level} contributions`;
                },
              },
            }}
          />
      </div>
    </div>
  );
}

