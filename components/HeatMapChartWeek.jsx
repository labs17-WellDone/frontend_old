import { ResponsiveHeatMap } from "@nivo/heatmap"

export const HeatMapChartWeek = ({ dates, statuses }) => {
  let valueStatus = []

  statuses.map(status => {
    if (status.status === 0) {
      valueStatus = [...valueStatus, 0]
    } else if (status.status === 1) {
      valueStatus = [...valueStatus, 50]
    } else {
      valueStatus = [...valueStatus, 100]
    }
  })

  let data = [
    {
      "": "",
      "Day 1": valueStatus[0],
      "Day 2": valueStatus[1],
      "Day 3": valueStatus[2],
      "Day 4": valueStatus[3],
      "Day 5": valueStatus[4],
      "Day 6": valueStatus[5],
      "Day 7": valueStatus[6],
      "Day 8": valueStatus[7],
      "Day 9": valueStatus[8],
      "Day 10": valueStatus[9],
      "Day 11": valueStatus[10],
      "Day 12": valueStatus[11],
      "Day 13": valueStatus[12],
      "Day 14": valueStatus[13],
    },
  ]

  return (
    <>
      <ResponsiveHeatMap
        data={data}
        keys={[
          "Day 1",
          "Day 2",
          "Day 3",
          "Day 4",
          "Day 5",
          "Day 6",
          "Day 7",
          "Day 8",
          "Day 9",
          "Day 10",
          "Day 11",
          "Day 12",
          "Day 13",
          "Day 14",
        ]}
        indexBy=""
        margin={{ top: 100, right: 60, bottom: 60, left: 60 }}
        padding={5}
        forceSquare={true}
        axisTop={{
          orient: "top",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: 36,
        }}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendPosition: "middle",
          legendOffset: -40,
        }}
        cellOpacity={1}
        cellBorderColor={{ from: "color", modifiers: [["darker", 0.4]] }}
        enableLabels={false}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.8]] }}
        defs={[
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "rgba(0, 0, 0, 0.1)",
            rotation: -45,
            lineWidth: 4,
            spacing: 7,
          },
        ]}
        fill={[{ id: "lines" }]}
        animate={true}
        motionStiffness={80}
        motionDamping={9}
        isInteractive={false}
        hoverTarget="cell"
        cellHoverOthersOpacity={0.25}
      />
    </>
  )
}
