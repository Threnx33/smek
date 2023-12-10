import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ChartType,
  Plugin,
} from "chart.js";
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
    },
  };

  return (
    <div className="flex space-x-12 px-8 py-4">
      <div className="h-52 w-52">
        <Doughnut ref={chartRef} data={data} options={options} />
      </div>
      <div className="flex flex-col justify-between">
        {legendItems.map((item, index) => (
          <div key={index} className="flex ">
            <span
              style={{ backgroundColor: item.color }}
              className={` w-1 h-full rounded-full inline-block mr-4`}
            ></span>
            <div className="flex flex-col ">
              <div className="text-cMediumGrey text-xs font-medium ">
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
