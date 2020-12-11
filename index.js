import * as React from "react"
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Header from '../components/header.js';
import Footer from '../components/footer.js';

// styles
// markup
// <BrowserRouter>
// <Header />
// <Switch>
//   <Route exact path='/'>

//   </Route>
// </Switch>
// <Footer />
// </BrowserRouter>
const IndexPage = () => {
  return (
    <BrowserRouter>
    <Header />
        
        <Switch>
        <Route exact path='/'>

     
        
     
    
        </Route>
        </Switch>
        <Footer />
        </BrowserRouter>
    
  )
}

export default IndexPage
