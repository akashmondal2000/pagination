import { useState,useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const App = () => {

  const [offset,setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState (0);

  const getData = async()=>{
    const res = await
    axios.get(`https://jsonplaceholder.typicode.com/photos`)
    const data = res.data;
    const slice = data.slice(offset, offset + perPage)
    const postData = slice.map(pd => {
      <div key={pd.id}>
        <p>{pd.title}</p>
        <img src={pd.thumbnailUrl} alt="" />
      </div>
      setData(postData);
      setPageCount(Math.ceil(data.length / perPage))
    })

  }
  return (
    <div className="App">
      <h1>Pagination App</h1>
    </div>
  );
}

export default App;
