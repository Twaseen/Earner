
/*import React from "react";
import "./Featured.scss"

const Featured = ()=> {
    return (
        <div className="featured">
            <div className="container">
                <div className="left">
                    <h1>Find the perfect <i>freelance</i> services for your bussiness</h1>
                    <div className="search">
                        <div className="searchInput">
                            <img src="./img/search.png" alt=""/>
                            <input type="text" placeholder='Try"building mobile app"'/>
                        </div>
                        <button>Search</button>
                    </div>
                    <div className="popular">
                        <span>Popular:</span>
                        <button>Web Design</button>
                        <button>Wordpress</button>
                        <button>Logo Design</button>
                        <button>AI Services</button>
                    </div>
                </div>
                <div className="right">
                    <img src="./img/man.png" alt="" />
                </div>
            </div>
            
        </div>
    )
}

export default Featured;*/

import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (input.trim() !== "") {
      navigate(`/gigs?search=${encodeURIComponent(input)}`);
    }
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>Grow Globally. Make It Happen.</h1>
          <h3>
            Your <i>Freelancing</i> Journey Starts Here.
          </h3>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                placeholder="Search for your gig"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button onClick={() => navigate("/gigs?search=Web%20Design")}>
              Web Design
            </button>
            <button onClick={() => navigate("/gigs?search=WordPress")}>
              WordPress
            </button>
            <button onClick={() => navigate("/gigs?search=Logo%20Design")}>
              Logo Design
            </button>
            <button onClick={() => navigate("/gigs?search=AI%20Services")}>
              AI Services
            </button>
          </div>
        </div>
        <div className="right">
          <img src="./img/twaseen.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
