import React from 'react'
import { Navbar, FooterContainer } from '@components/index'

export const Layout = ({ children }) => {
  return (
    <div style={{maxWidth: 1440, margin: "0 auto", backgroundColor: "black"}}>
      <Navbar />
      {children}
      <FooterContainer />
    </div>
  )
}
