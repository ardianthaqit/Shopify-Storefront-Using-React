import React, { Component } from 'react'
import  {Client}  from 'shopify-buy'

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API
});

export class ShopifyApi extends Component {
  
  state = {
    product:{},
    products:{},
    checkout:{},
    isCartOpen: false,
    isMenuOpen: false
  }

  componentDidMount(){
    this.createCheckout()
  }

// createCheckout = async () => {
//   const checkout = await client.checkout.create()
//   localStorage.setItem("checkout-id", checkout.id)
//   this.setState({ checkout: checkout })
// }
addItemtoCheckout = async () => {
}
removeLineItem = async (lineItemIdsToRemove) => {
}
fetchAllProducts = async () => {
  const products = await client.product.fetchAll();
  this.setState({ products:products })
}
fetchAllProductWithHandle = async (handle) => {
  const product = await client.product.fetchByHandle(handle)
  this.setState({ product: product })
}
closeCart = () => {
}
openCart = () => {
}
closeMenu = () => {
}
openMenu = () => {
}
  render() {
    // console.log(this.state.checkout)
    return (
     <ShopContext.ShopifyApi>
      {this.props.children}
      </ShopContext.ShopifyApi>
    )
  }
}


const ShopConsumer = ShopContext.Consumer

export {ShopConsumer,ShopContext}
export default ShopifyApi