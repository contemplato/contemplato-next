import React from "react"
import Head from "next/head"
import FACEBOOK_PIXEL_1 from "./facebook/pixel-1"
import GOOGLE_ANALYTICS from "./google/google-1"

export default () => {
  return (
    <Head>
      <FACEBOOK_PIXEL_1 />
      <GOOGLE_ANALYTICS />
    </Head>
  )
}
