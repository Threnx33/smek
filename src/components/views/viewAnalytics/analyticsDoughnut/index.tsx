import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

type LegendItem = {
  label: string;
  data: number;
  color: string;
};

export const AnalyticsDoughnut: React.FC = () => {
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

  const plugin = {
    id: 'after',
    afterDraw(chart:ChartJS<"doughnut">) {
      const ctx = chart.ctx;
      const width = chart.width;
      const height = chart.height;
      const fontSize = (height / 114).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = "middle";

      const total = chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
      const text = total.toString();
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillText(text, textX, textY);
    },
    }
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        display: false, // Hide the default legend
      },
      title: {
        display: true,
        text: "Credentials",
      },
      
    },
    
  };

  return (
    <div className="flex space-x-12 p-4">
      <div className="h-52 w-52">
        <Doughnut ref={chartRef} data={data} options={options} />
      </div>
      <div className="flex flex-col justify-between">
        {legendItems.map((item, index) => (
          <div key={index} className="flex ">
            <span
              style={{ backgroundColor: item.color }}
              className={` w-2 h-full rounded-full inline-block mr-4`}
            ></span>
            <div className="flex flex-col ">
              <div className="text-cMediumGrey text-xs font-medium ">
                {item.label}
              </div>
              <div className="text-xl font-bold">{item.data}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
