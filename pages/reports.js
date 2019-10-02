import React, { useState } from "react"
import { colors, breakingPoints } from "../components/Styles"
import Seo from "../components/Seo"
import DashHeader from "../components/Header"
import { FiHelpCircle, FiAlertCircle, FiCheckCircle } from "react-icons/fi"
import { getPumpStyles } from "../components/Styles"
import LegandModal from "../components/LegandModal"

export default function Reports({ pumps }) {
  const pumpStyles = getPumpStyles({ iconSize: 25 })
  const [filter, setFilter] = useState({ 0: true, 1: true, 2: true })

  return (
    <>
      {/* <Seo title="Reports • Welldone Dashboard" /> */}

      <DashHeader
        title="Reports"
        actions={
          <div>
            <button
              active={filter[0]}
              onClick={() => setFilter({ ...filter, 2: !filter[2] })}>
              Functional
            </button>
            <button
              active={filter[1]}
              onClick={() => setFilter({ ...filter, 1: !filter[1] })}>
              Non-Functional
            </button>
            <button onClick={() => setFilter({ ...filter, 0: !filter[0] })}>
              Unknown
            </button>
          </div>
        }
      />
      <LegandModal />
      <div css={{ padding: "0 20px", maxWidth: 1240, margin: "0 auto" }}>
        {pumps.sort().map(pump => {
          return (
            <details
              css={{
                padding: "20px 30px",
                backgroundColor: "white",
                borderRadius: 10,
                margin: "10px 0",
              }}>
              <summary
                css={{
                  display: "flex",
                  alignItems: "center",
                  outline: "none",
                  cursor: "pointer",
                  "::-webkit-details-marker": {
                    display: "none",
                  },
                }}>
                <div css={{ marginRight: 10 }}>
                  <span css={{ color: pumpStyles.status[pump.status].color }}>
                    {" "}
                    {pumpStyles.status[pump.status].icon}
                  </span>
                </div>
                <div css={{ flexGrow: 1 }}>{pump.id}</div>
                <div css={{ textAlign: "right" }}>
                  <div css={{ display: "flex" }}>
                    {pump.statuses ? (
                      Object.keys(pump.statuses).map(date => {
                        const status = pump.statuses[date].status
                        return (
                          <div
                            css={{
                              width: 10,
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
                  <p
                    css={{
                      fontSize: 12,
                      margin: "5px 0 0",
                      color: colors.darkText,
                      opacity: 0.8,
                    }}>
                    Click For More Info
                  </p>
                </div>
              </summary>
              <div>
                <h3>More info and charts</h3>
              </div>
            </details>
          )
        })}
      </div>
    </>
  )
}

Reports.getInitialProps = async () => {
  const { pumps } = require("../assets/cache/pumps.json")
  // const newPumps = []
  // pumps.forEach(async pump => {
  //   const village = await getVillage(pump.village.id)
  //   console.log(village)
  //   newPumps.push({ ...pump, village })
  // })
  return { pumps }
}
