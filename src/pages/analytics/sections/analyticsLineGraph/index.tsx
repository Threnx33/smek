import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";

type AnalyticsLineGraphProps = {
  title: string;
  total: string;
  dataValues: number[];
  step: number;
  className?: string;
};

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const AnalyticsLineGraph = ({
  title,
  total,
  dataValues,
  step,
  className,
}: AnalyticsLineGraphProps) => {
  const chartRef = useRef<ChartJS<"line">>(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, "rgba(165, 131, 243, 1)");
      gradient.addColorStop(1, "rgba(165, 131, 243, 0)");

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

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
        borderColor: "rgba(165, 132, 243, 1)",
        pointBorderColor: "rgba(165, 132, 243, 1)",
        pointBackgroundColor: "#fff",
        borderWidth: 2,
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(165, 132, 243, 1)",
        pointHoverBorderColor: "rgba(165, 132, 243, 0.5)",
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
        mode: "index",
        intersect: false,
        backgroundColor: "hsla(220, 6%, 10%, 1)",
        displayColors: false,
        cornerRadius: 8,
        yAlign: "bottom",
        caretSize: 5,
        bodySpacing: 4,
        callbacks: {
          title: function () {
            return "Issued";
          },
          label: function (context: { parsed: { y: number } }) {
            return context.parsed.y.toString();
          },
        },
        titleFont: { size: 12, weight: 400 },
        bodyFont: { size: 16, weight: 400 },
        titleAlign: "center",
        bodyAlign: "center",
        padding: { x: 20, y: 8 },
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
          callback: function (value: string | number) {
            if (typeof value === "number" && value >= 1000) {
              return value / 1000 + "k";
            }
            return value;
          },
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
    <div
      className={`${className} mb-6 h-[26rem] w-full rounded-lg border p-2 pb-14 sm:p-4 sm:pb-16 `}
    >
      <div className="header flex items-center justify-between">
        <div className="flex items-center text-xl font-semibold">
          <span className="mr-2">{title}</span>
          <img
            className="h-5 w-5 cursor-pointer"
            src="/infoCircle.svg"
            alt="InfoCircleImage"
          />
        </div>
        <div className="flex flex-col items-end space-y-0 ">
          <div className="text-lg font-bold">{total}</div>
          <div className="text-sm text-cMediumGrey">Total {title}</div>
        </div>
      </div>
      <Line ref={chartRef} data={data} options={options as any} />
    </div>
  );
};
