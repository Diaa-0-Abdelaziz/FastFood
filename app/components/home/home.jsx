import React from 'react'
import MainSection from '../main/main'
import Carts from '../carts/carts'
import BurgerKing from '../burgerKing/burgerKing'
import Bigcard from '../bigCard/bigcard'
import Clients from '../clients/clients'
import Download from '../download/download'
// import Footer from '../footer/footer'

export default function Main() {
  return (
    <>
    <MainSection/>
    <Carts/>
    <BurgerKing/>
    <Bigcard/>
    <Clients/>
    <Download/>
    {/* <Footer/> */}
    </>
  )
}
