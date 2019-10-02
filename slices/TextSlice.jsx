import React from "react"
import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"
import { colors, breakingPoints } from "../components/Styles"
import { RichText } from "prismic-reactjs"

export default function TextSlice({ primary, items, ...rest }) {
  return (
    <div
      css={{
        width: "49%",
        backgroundColor: "white",
        borderRadius: 10,
        padding: "10px 30px",
        h1: {
          marginBottom: 0,
        },
        p: {
          color: "#2A2A32",
          opacity: 0.8,
        },
      }}>
      {RichText.render(primary.content)}
      {primary.button_link ? (
        <button
          css={{
            transition: ".3s",
            backgroundColor: colors.brand,
            padding: "10px 20px",
            color: "white",
            borderRadius: 10,
            outline: "none",
            border: `3px solid ${colors.brand}`,
            fontWeight: 600,
            ":hover": {
              backgroundColor: "white",
              color: colors.brand,
              border: `3px solid ${colors.brand}`,
            },
          }}>
          {RichText.asText(primary.button_text)}
        </button>
      ) : null}
    </div>
  )
}
