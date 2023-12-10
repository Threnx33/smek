import { Line } from "react-chartjs-2";
import "chart.js/auto";

type AnalyticsLineGraphProps = {
  title: string;
  total: string;
  dataValues: number[];
  step: number;
};

export const AnalyticsLineGraph = ({
  title,
  total,
  dataValues,
  step,
}: AnalyticsLineGraphProps) => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Issued",
        data: dataValues,
        fill: true,
        backgroundColor: "rgba(147, 197, 253, 0.2)",
        borderColor: "rgba(59, 130, 246, 1)",
        pointBorderColor: "rgba(59, 130, 246, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(59, 130, 246, 1)",
        pointHoverBorderColor: "rgba(220, 220, 220, 1)",
        pointHoverBorderWidth: 2,
        pointRadius: 6,
        pointHitRadius: 10,
      },
    ],
  };

  const options = {
    isNumberShown: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        mode: "index" as any,
        intersect: false,
      },
      datalabels: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: step,
        },
        max: 6 * step,
      },
      x: {
        grid: {
          drawBorder: true,
          display: false,
        },
        ticks: {
          display: true,
        },
      },
    },

    maintainAspectRatio: false,
  };

  return (
    <div className="h-[26rem] border rounded-lg p-4 pb-16 mb-6">
      <div className="header flex justify-between items-ceter">
        <div className="text-xl font-semibold flex items-center">
          <span className="mr-2">{title}</span>
          <img
            className="h-5 w-5 "
            src="/infoCircle.svg"
            alt="InfoCircleImage"
          />
        </div>
        <div className="flex flex-col items-end mr-4 space-y-0 ">
          <div className="font-bold text-lg">{total}</div>
          <div className="text-sm text-cMediumGrey">Total {title}</div>
        </div>
      </div>
      <Line data={data} options={options} />
    </div>
  );
};
