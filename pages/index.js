import React from "react"
import { getPrismicApi } from "../prismic"
import Seo from "../components/Seo"
import { breakingPoints } from "../components/Styles"
import SliceResolver from "../components/SliceResolver"

export default function IndexPage({ doc: { data } }) {
  console.log(data)
  return (
    <div css={{ padding: "20px 20px", maxWidth: 1240, margin: "0 auto" }}>
      <Seo data={data} />
      <div
        css={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          [breakingPoints.md]: {
            flexDirection: "column",
            div: { width: "100%", margin: "10px 0" },
          },
        }}>
        {data.body.map((element, index) => (
          <SliceResolver key={`slice-${index}`} {...element} />
        ))}
      </div>
    </div>
  )
}

IndexPage.getInitialProps = async context => {
  const { api, ref } = await getPrismicApi(context)
  const doc = await api.getSingle("home_page", { ref })
  return { doc }
}
