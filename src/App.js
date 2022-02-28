import React from 'react';
import { Switch , Route } from 'react-router-dom';

import ANavigation from './components/Navigation/ANavigation';
import AHome from './components/Home/AHome';
import ALineChart from './components/LineChart/ALineChart';
import ABarChart from './components/BarChart/ABarChart';

const App = ()=>{
    return (
      <>
        <ANavigation/>
        <Switch>
            <Route path="/" component={AHome} exact/>
            <Route path="/linechart" component={ALineChart} exact/>
            <Route path="/barchart" component={ABarChart} exact/>
        </Switch>
      </>      
    )
}

export default App;