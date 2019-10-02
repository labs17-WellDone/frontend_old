const getCookies = require("next-cookies")
const Prismic = require("prismic-javascript")

const API_ENDPOINT = `https://welldone-content.cdn.prismic.io/api/v2`

const linkResolver = doc => {
  if (doc.type === "homepage") return "/"
  return "/"
}

async function getPrismicApi(context) {
  const api = await Prismic.api(API_ENDPOINT)
  const cookies = getCookies(context)
  const previewRef = cookies[Prismic.previewCookie]
  const masterRef = api.refs.find(ref => ref.isMasterRef === true)
  const ref = previewRef || masterRef.ref
  return { api, ref }
}

module.exports = {
  API_ENDPOINT,
  linkResolver,
  getPrismicApi,
}
