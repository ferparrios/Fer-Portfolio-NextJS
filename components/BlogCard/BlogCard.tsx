import React from "react";

export const BlogCard = () => {
  return (
    <div className="blog-card-container">
      <div className="card bg-ligh text-black blog-card-container-inside">
        <img
          src="https://surtido.pe/wp-content/themes/surtido-v3/img/bg/Marquesina-surtido-500.png"
          className="card-img blog-card-background-image"
          alt="..."
        />
        <div className="card-img-overlay blog-card-content-container">
          <div className="blog-card-inside-content">
            <div className="blog-card-inside-content-text-container">
              <p className="blog-card-inside-text">Check my posts on</p>
              <p className="blog-card-inside-text-link">
                <a href="">Surtido.pe</a>
              </p>
            </div>
            <div className="blog-card-inside-image-container">
              <img
                src="https://pbs.twimg.com/profile_images/1329804285446598658/vothULxS_400x400.jpg"
                className="blog-card-inside-image"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
