import "../index.css";
import { NavLink } from "react-router-dom";
const Product = ({ id, name, price, image }) => {
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <div className="card-data">
          <h3>{name}</h3>
          <div className="card-data-flex">
            <span className="card-data--price">${price}</span>
            <button className="btn">Buy Now</button>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
