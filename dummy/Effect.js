import React, { useEffect, useState } from "react";
import axios from "axios";

function Effect() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log(response.data);
        setData(response.data[7].email);
        console.log("API WAS CALLED");
      })
      .catch((error)=>{console.log(error)})
  }, []);

  return (
    <div>
      Hello World
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button className="btn btn-primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Effect;