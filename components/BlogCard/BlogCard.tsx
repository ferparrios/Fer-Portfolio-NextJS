import React from "react";
import surtidoLogo from "../../public/images/surtido_logo.png"

export const BlogCard = () => {
  return (
    <div className="blog-card-container">
      <div className="card bg-ligh text-black blog-card-container-inside" >
        <img src="https://surtido.pe/wp-content/themes/surtido-v3/img/bg/Marquesina-surtido-500.png" className="card-img blog-card-background-image" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">Card title</h5>
          <img src={surtidoLogo} className="" alt="..." />
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
    </div>
  );
};
