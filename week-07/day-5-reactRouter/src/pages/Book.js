import { useParams } from "react-router-dom";

function Book() {
  const params = useParams();
  return <div>YOU are about to access book: {params.bookID}</div>;
}

export default Book;
