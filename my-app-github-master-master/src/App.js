import "./App.css";
import { Link } from "react-router-dom";
import UserDetailsComponent from "./Component/UserDetailsComponent";




function App() {
   return (
        <div className="App">
         <UserDetailsComponent/>
    <nav>
      <Link to = "/EditComp">Edit</Link>
    </nav>
         </div>
   );
    };
    export default App;

