import React from 'react'
import { ExtensionPoint } from "vtex.render-runtime"

const WishlistPage = (props) => {
  if(props.location.pathname == "/wishlist") return <ExtensionPoint id="list-context" />
  return null
}

export default WishlistPage
