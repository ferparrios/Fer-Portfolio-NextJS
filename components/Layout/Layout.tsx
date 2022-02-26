import React from 'react'
import { Navbar, FooterContainer } from '@components/index'

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <FooterContainer />
    </div>
  )
}
