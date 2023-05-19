import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) =>
        console.error(
          "There has been a problem with your fetch operation: ",
          error
        )
      );
  }, []);

  return <div>{data && <p>{data.key}{data.key2}</p>}Dolev</div>;
}

export default App;
