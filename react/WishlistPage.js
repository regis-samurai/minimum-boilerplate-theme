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
  path: "/account"
};

const WishlistPage = (props) => {

  if(props.location.pathname == "/wishlist") return <ContentWrapper
          namespace="my-custom-page"
          title="wishlist"
          backButton={backButton}>
        {({ handleError }) => children}
    <ExtensionPoint id="list-context" />
      </ContentWrapper>
  return null
}

export default WishlistPage
