import { useState,useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

// https://medium.com/how-to-react/create-pagination-in-react-js-using-react-hooks-c3c582ff5a96

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


  useEffect(()=>{
    getData();
  },[offset])

  // Now let's create a method to handle our page click.

  // The method is just updating our offset state by adding 1 on each click using setOffset method.
  const handlePageClick = (e)=>{
    const seclectedPage = e.seclected;
    setOffset(seclectedPage +1);
  }
  return (
    <div className="App">
      <h1>Pagination App</h1>
    </div>
  );
}

export default App;
