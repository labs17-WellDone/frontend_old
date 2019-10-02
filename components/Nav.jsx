import React from "react"
import Link from "next/link"
import { colors, breakingPoints } from "./Styles"
import { useStore } from "./Layout"
import { RichText } from "prismic-reactjs"

export default function Nav({ navData: { data } }) {
  console.log(data)
  const { store, toggleNav } = useStore()
  return (
    <>
      {store.nav ? (
        <div
          onClick={() => toggleNav(false)}
          css={{
            [breakingPoints.md]: {
              position: "absolute",
              backgroundColor: "black",
              opacity: 0.2,
              top: 0,
              left: 0,
              right: 0,
              zIndex: 10000,
              height: "100%",
            },
          }}></div>
      ) : null}
      <div
        css={{
          boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
          position: "fixed",
          minHeight: "100vh",
          backgroundColor: colors.brand,
          [breakingPoints.md]: {
            transition: ".2s",
            position: "fixed",
            zIndex: 99999,
            marginLeft: store.nav ? 0 : -250,
          },
        }}>
        <Link href="/">
          <img
            onClick={() => toggleNav(false)}
            src={data.logo.url}
            css={{ width: 200, margin: "50px 20px ", cursor: "pointer" }}
            alt={data.logo.alt}
          />
        </Link>
        <div
          css={{
            color: "white",
            a: {
              fontSize: 20,
              marginLeft: 10,
            },
          }}>
          {data.nav_links.map(({ name, link, id, icon }) => {
            return (
              <Link href={`/${link}`}>
                <div
                  id={id}
                  className={id}
                  onClick={() => toggleNav(false)}
                  css={{
                    padding: "10px 25px",
                    cursor: "pointer",
                    ":hover": {
                      backgroundColor: colors.btnHover,
                    },
                  }}>
                  <img src={icon.url} />
                  <a>{RichText.asText(name)}</a>
                </div>
              </Link>
            )
          })}
          {/* <div
            css={{
              padding: "10px 25px",
              cursor: "pointer",
              ":hover": {
                backgroundColor: colors.btnHover,
              },
            }}>
            <FiLogOut />
            <a>Logout</a>
          </div> */}
        </div>
      </div>
    </>
  )
}
