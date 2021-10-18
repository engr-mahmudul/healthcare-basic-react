import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import LogIn from './components/LogIn/LogIn';


function App() {
  return (
    <div >
    
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Homepage></Homepage>
            </Route>
            <Route exact path='/home'>
              <Homepage></Homepage>
            </Route>
            <Route exact path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route exact path='*'>
              <PageNotFound></PageNotFound>
            </Route>

          </Switch>
        </BrowserRouter>
     

    </div>
  );
}

export default App;
