import React from 'react'
import { Navbar, FooterContainer } from '@components/index'

export const Layout = ({ children }) => {
  return (
    <div className='layout-container'>
      <Navbar />
      {children}
      <FooterContainer />
    </div>
  )
}
