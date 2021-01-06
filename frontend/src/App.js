import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateUser from './components/CreatsUser';
import  CreateExercise  from "./components/CreateExercise";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditExercise from './components/EditExercise';
import ExerciseList from './components/ExerciseList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <Router>
        
          <header >
              <Navbar />
            </header>
          
          
            <Route path="/" exact component={ExerciseList}/>
            <Route path="/edit/:id" exact component={EditExercise}/>
            <Route path="/create" exact component={CreateExercise}/>
            <Route path="/user" exact component={CreateUser}/>
          
        
      </Router>
    </div>
  );
}

export default App;
