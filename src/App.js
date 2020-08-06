import React, { Fragment } from 'react';
import './App.css';
import { Route,Switch } from 'react-router-dom';
import Home from './component/Home';
import History from './component/History';
import HistoryDetails from './component/HistoryDetails';
import Payload from './component/Payload';
import Navigation from './component/Navigation';
import PayloadDetails from './component/PayloadDetails';

function App() {
  return (
    <Fragment>
      <Navigation />
    <div className="container">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/history" component={History} />
        <Route path="/history/:id" component={HistoryDetails} />
        <Route exact path="/payload" component={Payload} />
        <Route path="/payloads/:id" component={PayloadDetails} />
        <Route render={()=>(<div><h1>Page Not Found</h1></div>)} />
      </Switch>
    </div>
    </Fragment>
  );
}

export default App;
