import React from 'react'
import { Navbar, FooterContainer } from '@components/index'

export interface LayoutProps {
  children: any
}

export const Layout = (props: LayoutProps) => {
  return (
    <div className='layout-container'>
      <Navbar />
      {props.children}
      <FooterContainer />
    </div>
  )
}
