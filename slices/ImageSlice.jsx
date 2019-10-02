import React from "react"
import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"
import { colors, breakingPoints } from "../components/Styles"
import { RichText } from "prismic-reactjs"

export default function ImageSlice({ primary, items }) {
  console.log(primary)
  return (
    <div
      css={{
        zIndex: -1,
        marginTop: -40,
        borderRadius: 10,
        margin: "0 0 20px",
        height: "70vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${primary.image.url})`,
        display: "flex",
        alignItems: "flex-end",
        color: colors.darkText,
        [breakingPoints.md]: {
          flexDirection: "column",
        },
      }}>
      <div
        css={{
          alignSelf: "flex-start",
          backgroundColor: "white",
          padding: "30px 30px",
          maxWidth: 500,
          borderRadius: "9px 0 10px 0",
          zIndex: 9999,
          [breakingPoints.md]: {
            borderRadius: "9px 9px 0 0",
          },
          h1: {
            margin: "0px 0 10px",
          },
          p: {
            margin: "0px 0px 0px",
            lineHeight: 1.5,
            color: colors.darkText,
            opacity: 0.8,
          },
        }}>
        {RichText.render(primary.content)}
      </div>
      <div css={{ flexGrow: 1 }}></div>
      <Link href={primary.button_link}>
        <button
          css={{
            cursor: "pointer",
            transition: ".3s",
            backgroundColor: "white",
            border: "none",
            borderRadius: "10px 0 9px 0",
            outline: "none",
            padding: "20px 30px",
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            color: colors.brand,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: colors.brand,
              color: "white",
            },
          }}>
          {RichText.asText(primary.button_text)} <FiArrowRight />
        </button>
      </Link>
    </div>
  )
}
