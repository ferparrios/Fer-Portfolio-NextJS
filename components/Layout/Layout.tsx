import React from 'react'
import { Navbar, FooterContainer } from '@components/index'
// import  '../../styles/globals.css'

export interface LayoutProps {
  children: any
}

export const Layout = (props: LayoutProps) => {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar />
      {props.children}
      <FooterContainer />
    </div>
  )
}
