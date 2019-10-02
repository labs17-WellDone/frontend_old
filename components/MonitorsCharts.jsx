import React from "react"
import { HeatMapChartWeek } from "./HeatMapChartWeek"

export default function monitorsCharts({ dates, statuses }) {
  return (
    <>
      <div className="charts">
        <div className="heatmapweek">
          <div className="monitor-title">
            <h1>Monitor Status: Aug 18 - Aug 24</h1>
          </div>
          <HeatMapChartWeek dates={dates} statuses={statuses} />
        </div>
      </div>
      <style jsx>{`
        .charts {
          width: 100%;
          margin: 2%;
        }
        .monitor-title {
          text-align: center;
        }
        .heatmapweek {
          height: 300px;
          margin-top: 4%;
        }
      `}</style>
    </>
  )
}
