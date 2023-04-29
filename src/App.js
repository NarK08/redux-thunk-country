/* eslint-disable no-lone-blocks */
import React from "react";
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import ReduxMiddProj from "./componets/ReduxMiddProj/ReduxMiddProj";
import { store } from "./componets/ReduxMiddProj/store/store";



function App() {


 return (
   <div className="App">

 <Provider store={store}>

  <BrowserRouter>
   <ReduxMiddProj />
  </BrowserRouter>

 </Provider>

   </div>

 );
}

export default App;


