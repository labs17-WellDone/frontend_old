import React, { useState } from "react"
import { colors, breakingPoints, getPumpStyles } from "../components/Styles"
import Seo from "../components/Seo"
import DashHeader from "../components/Header"
import MonitorCard from "../components/MonitorCard"
import LegandModal from "../components/LegandModal"

export default function Monitors({ pumps }) {
  const [filter, setFilter] = useState({ 0: true, 1: true, 2: true })

  return (
    <>
      {/* <Seo title="Monitors • Welldone Dashboard" /> */}
      <DashHeader
        title="Monitors"
        // actions={
        //   <div>
        //     <button
        //       active={filter[0]}
        //       onClick={() => setFilter({ ...filter, 2: !filter[2] })}>
        //       Functional
        //     </button>
        //     <button
        //       active={filter[1]}
        //       onClick={() => setFilter({ ...filter, 1: !filter[1] })}>
        //       Non-Functional
        //     </button>
        //     <button onClick={() => setFilter({ ...filter, 0: !filter[0] })}>
        //       Unknown
        //     </button>
        //   </div>
        // }
      />
      <LegandModal />
      <div
        css={{
          padding: "0 20px",
          maxWidth: 1240,
          margin: "0 auto",
        }}>
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
          }}>
          {pumps
            ? pumps
                .filter(pump => !pump.error)
                .map(pump => {
                  return <MonitorCard pump={pump} />
                })
            : null}
        </div>
        <h4>Non Functional Pumps</h4>
        <div
          css={{
            display: "flex",
            flexWrap: "wrap",
          }}>
          {pumps
            ? pumps
                .filter(pump => pump.error)
                .map(pump => {
                  return <MonitorCard error pump={pump} />
                })
            : null}
        </div>
      </div>
    </>
  )
}

Monitors.getInitialProps = async () => {
  const { pumps } = require("../assets/cache/pumps.json")

  return { pumps }
}
