import { useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();
  console.log(params);
  return <div>This page will show product number: {params.productID}</div>;
}
