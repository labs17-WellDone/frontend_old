import React from "react"
import {
  FiEdit,
  FiHelpCircle,
  FiAlertCircle,
  FiCheckCircle,
} from "react-icons/fi"
import { getPumpStyles } from "./Styles"

export default function ModalCard({ pump }) {
  const pumpStyles = getPumpStyles({ iconSize: 20 })
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        p: {
          margin: "10px 0",
        },
      }}>
      <p css={{ alignSelf: "right", fontWeight: "bolder" }}>ID #{pump.id}</p>
      {/* <p>Total Water-Flow: {pump.statuses && pump.statuses[13].total}</p> */}
      {/* <span css={{ display: "flex" }}> */}
      <p css={{ fontWeight: "bolder" }}>
        <span css={{ textDecoration: "underline" }}>Status:</span>
        <span css={{ color: pumpStyles.status[pump.status].color }}>
          {" "}
          {pumpStyles.status[pump.status].icon}
        </span>
      </p>
      {/* </span> */}
      <p>
        <span css={{ textDecoration: "underline", fontWeight: "bold" }}>
          3-Day Spread:{" "}
        </span>
        <ul css={{ listStyleType: "none" }}>
          <li>
            <span
              css={
                pump.statuses
                  ? pump.statuses[12].status === 0
                    ? { color: "#f44336", marginRight: "10px" }
                    : pump.statuses[12].status === 1
                    ? { color: "#FFAD34", marginRight: "10px" }
                    : pump.statuses[12].status === 2
                    ? { color: "#01c000", marginRight: "10px" }
                    : null
                  : ""
              }>
              {" "}
              {pump.statuses ? (
                pump.statuses[Object.keys(pump.statuses)[12]].status === 0 ? (
                  <FiAlertCircle />
                ) : pump.statuses[Object.keys(pump.statuses)[12]].status ===
                  1 ? (
                  <FiHelpCircle />
                ) : pump.statuses[Object.keys(pump.statuses)[12]].status ===
                  2 ? (
                  <FiCheckCircle />
                ) : null
              ) : (
                "Connection Failure"
              )}
            </span>
            {pump.dates && pump.dates[12]}
          </li>
          <li>
            <span
              css={
                pump.statuses
                  ? pump.statuses[11].status === 0
                    ? { color: "#f44336", marginRight: "10px" }
                    : pump.statuses[11].status === 1
                    ? { color: "#FFAD34", marginRight: "10px" }
                    : pump.statuses[11].status === 2
                    ? { color: "#01c000", marginRight: "10px" }
                    : null
                  : ""
              }>
              {" "}
              {pump.statuses ? (
                pump.statuses[Object.keys(pump.statuses)[11]].status === 0 ? (
                  <FiAlertCircle />
                ) : pump.statuses[Object.keys(pump.statuses)[11]].status ===
                  1 ? (
                  <FiHelpCircle />
                ) : pump.statuses[Object.keys(pump.statuses)[11]].status ===
                  2 ? (
                  <FiCheckCircle />
                ) : null
              ) : (
                "Connection Failure"
              )}
            </span>
            {pump.dates && pump.dates[11]}{" "}
          </li>
          <li>
            <span
              css={
                pump.statuses
                  ? pump.statuses[10].status === 0
                    ? { color: "#f44336", marginRight: "10px" }
                    : pump.statuses[10].status === 1
                    ? { color: "#FFAD34", marginRight: "10px" }
                    : pump.statuses[10].status === 2
                    ? { color: "#01c000", marginRight: "10px" }
                    : null
                  : ""
              }>
              {" "}
              {pump.statuses ? (
                pump.statuses[Object.keys(pump.statuses)[10]].status === 0 ? (
                  <FiAlertCircle />
                ) : pump.statuses[Object.keys(pump.statuses)[10]].status ===
                  1 ? (
                  <FiHelpCircle />
                ) : pump.statuses[Object.keys(pump.statuses)[10]].status ===
                  2 ? (
                  <FiCheckCircle />
                ) : null
              ) : (
                "Connection Failure"
              )}
            </span>
            {pump.dates && pump.dates[10]}{" "}
          </li>
        </ul>{" "}
        */}
      </p>
    </div>
  )
}
