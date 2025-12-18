import Add from "../actions/add";
import Delete from "../actions/delete";
import Update from "../actions/update";
import Find from "../actions/find";
import { useState } from "react";
import '../style/home.css'

const Home = () => {
  const [page, setPage] = useState("");

  return (
    <div className="home-container">
      <h1 className="title">Welcome to Home Page</h1>

      <div className="button-group">
        <button onClick={() => setPage("add")} className="btn add">ADD</button>
        <button onClick={() => setPage("delete")} className="btn delete">DELETE</button>
        <button onClick={() => setPage("update")} className="btn update">UPDATE</button>
        <button onClick={() => setPage("find")} className="btn find">FIND</button>
      </div>

      <div className="content">
        {page === "" && (
          <h2 className="hint">Please press a button to make an action</h2>
        )}
        {page === "add" && <Add />}
        {page === "delete" && <Delete />}
        {page === "update" && <Update />}
        {page === "find" && <Find />}
      </div>
    </div>
  );
};

export default Home;
