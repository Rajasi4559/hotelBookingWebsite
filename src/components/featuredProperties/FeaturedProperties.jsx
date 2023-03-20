import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcroyalbengal-kolkata/images/overview-landing-page/dining/hotel-card-listing/the-brass-room.png"
          alt=""
          className="fpImg"
        />
        <span className="fpName">ITC Royal Bengal</span>
        <span className="fpCity">Kolkata</span>
        <span className="fpPrice">Starting from Rs.11k</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/34223229.jpg?k=9826fa689c3fe157ca6b584a07c5456c6a241078e79250dd26db46f94ca77cfa&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Leela Kovalam</span>
        <span className="fpCity">Thiruvantapuram</span>
        <span className="fpPrice">Starting from Rs.15k</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2016/10/21/1003/Grand-Hyatt-Goa-P443-Club-View-King-Bay-View.jpg/Grand-Hyatt-Goa-P443-Club-View-King-Bay-View.16x9.jpg?imwidth=1280"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Grand Hyatt</span>
        <span className="fpCity">Goa</span>
        <span className="fpPrice">Starting from Rs.24k</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i0.wp.com/seashellhotels.net/wp-content/uploads/2020/10/candlelight.jpg?fit=1200%2C750&ssl=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Wild Orchid</span>
        <span className="fpCity">Andaman</span>
        <span className="fpPrice">Starting from Rs.5k</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;