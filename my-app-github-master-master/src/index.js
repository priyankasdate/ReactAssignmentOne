import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter ,Routes ,Route} from "react-router-dom";
import App from "./App";
// import EditComp from "./AppComponent/EditComp";
import EditComp from "./Component/EditComp";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<BrowserRouter>
<Routes>
  <Route path="/EditComp" element={<EditComp/>}/>
    <Route path="/" element={<App/>}/>
   
</Routes>

</BrowserRouter>

);