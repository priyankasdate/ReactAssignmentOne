import { useState, useEffect } from "react";
import DemoComp3 from "./DemoComp3";

const DemoComp2= () => {
  const [name, setName] = useState("React"); 
  const [flag, setFlag] = useState(false);
  const [res, setRes] = useState("");

  const upadateNameState = () => {
    setName("Updated React");
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/Ervin Howell/1")
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setRes(response.title);
      });

    console.log(name);
    console.log();
  }, [flag]); 
  
  return (
    <div>
      <p>Demo Component2</p>
      <p>{res}</p>
      <DemoComp3 compName={name} />
      <button onClick={upadateNameState}>Update Name</button>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        Test
      </button>
    </div>
  );
};

export default DemoComp2;
