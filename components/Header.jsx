import React, { useState } from "react"
import { FiUser } from "react-icons/fi"
import { colors, breakingPoints } from "./Styles"
import { FiMenu, FiX } from "react-icons/fi"

export default function DashHeader({ title, actions }) {
  return (
    <>
      <div>
        <div
          css={{
            padding: "20px 20px",
            maxWidth: 1240,
            margin: "0 auto",
          }}>
          <div css={{ display: "flex", alignItems: "center" }}>
            <div css={{ flexGrow: 1 }}>
              <h1 css={{ margin: 0, fontSize: 25, color: "#2A2A32" }}>
                {title}
              </h1>
            </div>
            <div
              css={{
                "a,button": {
                  transition: ".2s",
                  marginLeft: 20,
                  color: colors.btnHover,
                  padding: "5px 10px",
                  fontWeight: "lighter",
                  borderRadius: 5,
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  ":hover": {
                    backgroundColor: colors.btnHover,
                    color: "white",
                  },
                },
              }}>
              {actions}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
