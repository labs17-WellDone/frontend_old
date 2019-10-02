import { useState } from "react"
import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Label,
} from "recharts"
import { getPumpStyles, breakingPoints } from "./Styles"

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")"
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")"
  }
}
export default function MonitorCard({ pump, error }) {
  const pumpStyles = getPumpStyles({ iconSize: 25 })
  const [graphData] = useState(() => {
    if (pump.statuses) {
      return Object.keys(pump.statuses).map(date => {
        return {
          name: date,
          total: Math.floor(pump.statuses[date].total),
        }
      })
    }
  })
  console.log(pump)
  return (
    <div
      css={{
        // padding: "20px 30px",
        backgroundColor: "white",
        border: "1px solid #DDE1E5",
        overflow: "hidden",
        width: "31%",
        borderRadius: 10,
        margin: "10px 1%",
        [breakingPoints.lg]: {
          width: "48%",
        },
        [breakingPoints.sm]: {
          width: "100%",
        },
      }}>
      <div css={{ padding: "20px 30px" }}>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            marginBottom: 10,
          }}>
          <div css={{ flexGrow: 1 }}>
            <div
              css={{
                borderRadius: "50%",
                width: 40,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: hexToRGB(
                  pumpStyles.status[pump.status].color,
                  0.2,
                ),
              }}>
              {pumpStyles.status[pump.status].icon}
            </div>
          </div>
          <div>
            <div css={{ display: "flex" }}>
              {pump.statuses ? (
                Object.keys(pump.statuses).map(date => {
                  const status = pump.statuses[date].status
                  return (
                    <div
                      css={{
                        width: 7,
                        height: 20,
                        margin: "0 2px",
                        borderRadius: 3,
                        backgroundColor: pumpStyles.status[status].color,
                        [breakingPoints.sm]: {
                          width: 5,
                        },
                      }}></div>
                  )
                })
              ) : (
                <h3 css={{ margin: 0, fontSize: 16 }}>No Data</h3>
              )}
            </div>
          </div>
        </div>
        <div>
          <h4 css={{ margin: 0 }}>{pump.id}</h4>
          <h3 css={{ margin: 0 }}>{pump.village.commune}</h3>
          <h4 css={{ margin: 0 }}>{pump.village.village}</h4>
        </div>
      </div>
      {!error ? (
        <div
          css={{
            width: "104%",
            marginLeft: "-2%",
            marginBottom: -4,
            height: 100,
          }}>
          <ResponsiveContainer>
            <AreaChart data={graphData}>
              <XAxis dataKey="name" hide />
              <Tooltip />
              <Area
                type="monotone"
                name="Total"
                dataKey="total"
                stroke="#0581FA"
                strokeWidth={2}
                fill={hexToRGB("#0581FA", 0.3)}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ) : null}
    </div>
  )
}
