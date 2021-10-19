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
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Goal from './components/Goal/Goal';
import About from './components/About/About';
import DataProvider from './context/DataProvider';


function App() {
  return (
    <div >
      <AuthProvider>
       <DataProvider>
        <BrowserRouter>
        <Navigation></Navigation>
          <Switch>
            <Route exact path='/'>
              <Homepage></Homepage>
            </Route>
            <Route exact path='/home'>
              <Homepage></Homepage>
            </Route>
            <PrivateRoute exact path='/about'>
              <About></About>
            </PrivateRoute>
            <PrivateRoute exact path='/goal'>
              <Goal></Goal>
            </PrivateRoute>
            <Route exact path='/login'>
              <LogIn></LogIn>
            </Route>
            <PrivateRoute exact path='/details/:detailsId'>
              <Details></Details>
            </PrivateRoute >
            <Route exact path='*'>
              <PageNotFound></PageNotFound>
            </Route>

          </Switch>
        </BrowserRouter>
        </DataProvider>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;
