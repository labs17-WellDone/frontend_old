import React from "react"
import Head from "next/head"
import { RichText } from "prismic-reactjs"

export default function Seo({ data }) {
  const url = "https://dashboard.welldone.org"
  const author = "Lambda School Labs15"
  const handle = "@welldone"

  const title = RichText.asText(data.title)
  const desc = RichText.asText(data.description)
  const image = data.image && data.image.url

  return (
    <Head>
      <link rel="icon" type="image/x-icon" href="/static/favicon.png" />
      {title && <title key="title">{title}</title>}
      {title && <meta name="title" content={title} key="meta:title" />}
      {author && <meta name="author" content={author} key="meta:author" />}

      {title && <meta property="og:title" content={title} key="og:title" />}
      <meta property="og:url" content={url} key="og:url" />
      <meta property="og:type" content="website" key="og:type" />
      {desc && <meta property="og:description" content={desc} key="og:desc" />}
      {image && <meta property="og:image" content={image} key="og:image" />}
      <meta property="og:image:type" content="image/png" key="og:image:type" />
      <meta property="og:image:width" content="800" key="og:image:width" />

      {handle && <meta name="twitter:site" content={handle} key="tw:site" />}
      {title && <meta name="twitter:title" content={title} key="tw:title" />}
      {desc && <meta name="twitter:description" content={desc} key="tw:desc" />}
      {image && <meta name="twitter:image" content={image} key="tw:image" />}
      <meta name="twitter:card" content="summary_large_image" key="tw:card" />
    </Head>
  )
}
