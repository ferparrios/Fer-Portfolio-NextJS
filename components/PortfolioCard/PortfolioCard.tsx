import React from 'react'

export const PortfolioCard = () => {
  return (
    <div style={{backgroundColor: "white", height: 400, alignItems: "center", display: "flex", width: "50%"}}>
      <div
        className="card bg-dark text-white"
        style={{ height: 250, width: "90%", margin: "0 auto" }}
      >
        <img src="..." className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  )
}
