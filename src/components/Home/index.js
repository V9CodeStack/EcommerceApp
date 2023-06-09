import { Link } from "react-router-dom";
import Header from "../Header";
import vinay from "../Home/vinay.png";

import "./index.css";

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <img
        src={vinay}
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
      <div className="home-content">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <Link to="/EcommerceApp/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  </>
);

export default Home;
