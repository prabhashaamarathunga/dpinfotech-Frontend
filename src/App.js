import './App.css';
import {Employee} from './components/Employee';
import {EmployeeFamily} from './components/EmployeeFamily';
import {Navigation} from "./components/Navigation";
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="container">

    <h3 className="mt-5 d-flex justify-content-center">Welcome To Employee Management Portal</h3>
    <br/>

    <Navigation/>
   
        <Switch>
          <Route path='/' component={Employee} exact />
          <Route path='/Family' component={Employee} exact />

        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
