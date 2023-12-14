import React from "react";
import "./headerPageComponents.scss";
import { Link } from "react-router-dom";

function HeaderPageComponents() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
        <div className="header_text_left col-lg-3 col-md-12 col-12">

          <ul className="header-ul">
            <li><Link>Woman’s Fashion</Link> </li>
            <li><Link>Men’s Fashion</Link></li>
            <li><Link>Electronics</Link></li>
            <li><Link>Home & Lifestyle</Link></li>
            <li><Link>Medicine</Link></li>
            <li><Link>Sports & Outdoor</Link></li>
            <li><Link>Baby’s & Toys</Link></li>
            <li><Link>Groceries & Pets</Link></li>
            <li><Link>Health & Beauty</Link></li>
          </ul>
        </div>

        <div className="header_image_right col-lg-9 col-md-12 col-12">
          <div className="header_image">
            <img src="../../../imgs/Frame 560.png" alt="" />
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default HeaderPageComponents;
