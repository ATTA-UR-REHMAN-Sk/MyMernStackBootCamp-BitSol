import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Post = () => {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      getUserData();
    }, 500);
  }, []);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log("error", error.message);
    }
  };
  const handlClick = (params) => {
    navigate(`/Post-Details/${params}`);
  };
  return (
    <div className="container-sm">
      <div className="row">
        <div className="col col-sm-6">
          {user.length > 0 ? (
            user.map((el, i) => (
              <ol>
                <li> {el.userId}</li>
                <li> {el.id}</li>
                <li> {el.title}</li>
                <li> {el.body} </li>
                <button onClick={() => handlClick(el.id)}> Show Details</button>
                {/* <li> {el.body}</li> */}
                {/* <h1> User Age:{el.name}</h1> */}
              </ol>
            ))
          ) : (
            <p>Loading..</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;
