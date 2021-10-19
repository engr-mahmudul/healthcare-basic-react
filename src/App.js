import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage/Homepage';
import PageNotFound from './components/PageNotFound/PageNotFound';
import LogIn from './components/LogIn/LogIn';
import AuthProvider from './context/AuthProvider';
import Navigation from './components/Navigation/Navigation';
import Details from './components/Details/Details';


function App() {
  return (
    <div >
      <AuthProvider>
       
        <BrowserRouter>
        <Navigation></Navigation>
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
            <Route exact path='/details/:detailsId'>
              <Details></Details>
            </Route>
            <Route exact path='*'>
              <PageNotFound></PageNotFound>
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
