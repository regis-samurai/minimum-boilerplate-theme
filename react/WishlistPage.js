import React from 'react'
import { ExtensionPoint } from "vtex.render-runtime"
import {
  ContentWrapper,
  BaseLoading,
  GenericError,
} from "vtex.my-account-commons"

const backButton = {
  title: "indietro",
  titleId: "indietro-wishlist",
  path: "/"
};

const WishlistPage = (props) => {

  if(props.location.pathname == "/wishlist") return <ContentWrapper
          namespace="wishlist-page"
          title="Wishlist"
          backButton={backButton}>
        {({ handleError }) => <ExtensionPoint id="list-context" />}
      </ContentWrapper>
  return null
}

export default WishlistPage
