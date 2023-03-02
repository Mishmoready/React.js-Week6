import { useParams } from "react-router-dom";

function Product() {
  const params = useParams();
  console.log(params); // just an object
  return <div>This is the Product ID: {params.productID}</div>;
}

export default Product;
