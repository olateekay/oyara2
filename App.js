import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Home  from './components/Home';
import  TransactionForm  from './components/TransactionForm';
import  NoMatch  from './components/NoMatch';

class App extends React.Component {
  render() {
    return (
     <React.Fragment>
       <Router>
         <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/TransactionForm" component={TransactionForm} />
          <Route component={NoMatch} />
         </Switch>
       </Router>
     </React.Fragment>
    );
  }
}  

export default App;
