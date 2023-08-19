import { useState,useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const App = () => {

  const [offset,setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState (0);
  return (
    <div className="App">
      <h1>Pagination App</h1>
    </div>
  );
}

export default App;
