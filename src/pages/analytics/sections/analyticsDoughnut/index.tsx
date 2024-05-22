import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  ChartOptions,
  ChartType,
  Legend,
  Plugin,
  Tooltip,
} from "chart.js";
import { useEffect, useRef, useState } from "react";
import { Doughnut } from "react-chartjs-2";

interface CenterNumberPluginOptions {
  font?: string;
  color?: string;
  enabled: boolean;
}

declare module "chart.js" {
  interface PluginOptionsByType<TType extends ChartType> {
    centerNumber?: CenterNumberPluginOptions;
  }
}

ChartJS.register(ArcElement, Tooltip, Legend);

type LegendItem = {
  label: string;
  data: number;
  color: string;
};

export const AnalyticsDoughnut = () => {
  const chartRef = useRef<ChartJS<"doughnut">>(null);
  const [legendItems, setLegendItems] = useState<LegendItem[]>([]);

  useEffect(() => {
    const chart = chartRef.current;
    if (chart) {
      const backgroundColors = chart.data.datasets[0].backgroundColor;
      const datas = chart.data.datasets[0].data;
      if (backgroundColors) {
        const newLegendItems =
          chart.data.labels?.map((label, index) => {
            const color = Array.isArray(backgroundColors)
              ? backgroundColors[index]
              : backgroundColors;
            return { label: label as string, data: datas[index], color };
          }) || [];
        setLegendItems(newLegendItems);
      }
    }
  }, []);

  const data: ChartData<"doughnut"> = {
    labels: ["Total Accepted", "Total Pendings", "Total Rejected"],
    datasets: [
      {
        label: "Credentials",
        data: [156, 10, 40],
        backgroundColor: ["#555CF3", "#F47690", "#A584F3"],
        borderWidth: 1,
        borderRadius: 4,
        spacing: 4,
      },
    ],
  };

  const centerNumberPlugin: Plugin<"doughnut"> = {
    id: "centerNumber",
    afterDatasetsDraw(
      chart: ChartJS<"doughnut">,
      args: any,
      options: CenterNumberPluginOptions
    ) {
      if (!options.enabled) return;
      const {
        ctx,
        data,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;
      ctx.save();

      const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
      const text = total.toString();
      const textX = left + width / 2;
      const textY = top + height / 2;

      ctx.font = options.font || "30px Arial";
      ctx.fillStyle = options.color || "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, textX, textY);

      ctx.restore();
    },
  };

  ChartJS.register(centerNumberPlugin);

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      centerNumber: {
        enabled: true,
        font: "550 30px Arial", // example font
      },
      tooltip: {
        enabled: true,
        mode: "index",
        backgroundColor: "hsla(220, 6%, 10%, 1)",
        displayColors: false,
        cornerRadius: 8,
        caretSize: 5,
        bodySpacing: 4,
        callbacks: {
          title: function (context: any): string {
            if (context.length > 0) {
              const chart = chartRef.current;
              if (chart) {
                const index = context[0].dataIndex;
                return (chart.data.labels?.at(index) as string) || "";
              }
            }
            return "";
          },
          label: function (context: any) {
            return context.parsed.toString();
          },
        },
        titleFont: { size: 12, weight: 400 },
        bodyFont: { size: 16, weight: 400 },
        titleAlign: "center",
        bodyAlign: "center",
        padding: { x: 20, y: 8 },
      },
    },
  };

  return (
    <div className="flex flex-col items-center sm:flex-row sm:space-x-12">
      <div className="mb-6 h-52 w-52 sm:mb-0">
        <Doughnut ref={chartRef} data={data} options={options} />
      </div>
      <div className="flex flex-col justify-between gap-4 sm:items-start">
        {legendItems.map((item, index) => (
          <div key={index} className="flex ">
            <span
              style={{ backgroundColor: item.color }}
              className={`h-fill mr-4 inline-block w-1 rounded-full`}
            ></span>
            <div className="flex flex-col ">
              <div className="text-xs font-medium text-cMediumGrey ">
                {item.label}
              </div>
              <div className="text-xl font-semibold">{item.data}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
