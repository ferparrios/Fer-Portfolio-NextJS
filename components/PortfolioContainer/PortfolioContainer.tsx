import React from 'react'
import { PortfolioCard } from '@components/index'

export const PortfolioContainer = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
      }}
      id="portfolio-home"
    >
      
      <PortfolioCard />
      <PortfolioCard />
    </div>
  )
}
