import { useState } from "react";
import { useEffect } from "react";

const Counter1 = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      getUserData();
    }, 2000);
  }, []);

  const getUserData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  return (
    <div>
      {state.length > 0 ? (
        state.map((el) => (
          <div>
            <h1> User Name:{el.name}</h1>
            <h1> User Address:{el.address.street}</h1>
            <h1> User Emil:{el.email}</h1>
            {/* <h1> User Age:{el.name}</h1> */}
          </div>
        ))
      ) : (
        <p>Loading..</p>
      )}
    </div>
  );
};

export default Counter1;
