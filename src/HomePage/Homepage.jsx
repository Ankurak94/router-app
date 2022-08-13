import React from "react";
// import { useEffect, useState } from "react";
// import axios from "axios";

function Homepage() {
  // let url = "https://lxkdtnbp26.execute-api.ap-south-1.amazonaws.com/dev/books";
  // const [urldata, setUrlData] = useState(null);
  // useEffect(() => {
  //   axios(url).then((resp) => {
  //     setUrlData(resp.data);
  //   });
  // }, [url]);
  return (
    <div>
      <h1>Main Page</h1>
      <p>Main Page to display</p>
      {/* {urldata &&
        urldata.map((book) => {
          return <h4>{book.isbn}</h4>;
        })} */}
    </div>
  );
}

export default Homepage;
