import "./searchItem.css";
import {Link } from 'react-router-dom';

const SearchItem = () => {
 
  return (
    <div className="searchItem">
      <img
        src="https://www.businessinsider.in/photo/68664363/heres-why-hotel-room-rates-in-india-may-double-in-the-next-3-to-4-years.jpg?imgsize=225157"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Hotel Leo Castle</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">Rs.4k</span>
          <span className="siTaxOp">Includes taxes and fees</span>
              <Link to = '/hotels/details'><button className="siCheckButton">See availability</button></Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;