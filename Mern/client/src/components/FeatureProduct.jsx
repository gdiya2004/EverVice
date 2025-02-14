import { useProductContext } from "../../Contexts/ProductContext";
import Product from "./Product";
import "../index.css"; // Importing CSS file

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div className="loading">......Loading</div>;
  }

  return (
    <section className="feature-section">
      <div className="container">
        <div className="intro-data">Check Now!</div>
        <h2 className="common-heading">Our Feature Services</h2>
        <div className="grid grid-three-column">
          {featureProducts.map((curElem) => (
            <Product key={curElem.id} {...curElem} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
