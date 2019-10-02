import React from "react"
import App, { Container } from "next/app"
import Styles, { breakingPoints } from "../components/Styles"
import NProgress from "nprogress"
import Router from "next/router"
import Nav from "../components/Nav"
import Layout from "../components/Layout"
import TopNav from "../components/TopNav"

import { getPrismicApi, linkResolver } from "../prismic"

Router.events.on("routeChangeStart", () => NProgress.start())
Router.events.on("routeChangeComplete", () => NProgress.done())
Router.events.on("routeChangeError", () => NProgress.done())

export default class extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    const { api, ref } = await getPrismicApi(ctx)
    const navData = await api.getSingle("nav", { ref })
    // const footerData = await api.getSingle("footer", { ref })
    return { pageProps, navData }
  }

  render() {
    const { Component, pageProps, navData } = this.props

    return (
      <Container>
        <Layout>
          <Nav navData={navData} />
          <div
            css={{
              marginLeft: 240,
              width: "100%",
              [breakingPoints.md]: {
                marginLeft: 0,
              },
            }}>
            <TopNav />
            <Component {...pageProps} />
          </div>
        </Layout>
        <Styles />
      </Container>
    )
  }
}
