import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';
import HeaderPage from "./routes/one"
import HeaderPage2 from "./routes/two"
import HeaderPage3 from "./routes/three"
import HeaderPage4 from "./routes/four"
import HeaderPage5 from "./routes/five"
import delPage from "./routes/del"
import store from"./store"
import {Router,Route,hashHistory,IndexRoute} from "react-router";



ReactDOM.render(<div>
  
  <Router history={hashHistory}>
      <Route path="/" component={HeaderPage}></Route>
      <Route path="/two" component={HeaderPage2}></Route>
      <Route path="/three" component={HeaderPage3}></Route>
      <Route path="/four" component={HeaderPage4}></Route>
      <Route path="/five" component={HeaderPage5}></Route>
      <Route path="/del(/:id)" component={delPage}></Route>
  </Router>
</div> ,document.getElementById("root")
)