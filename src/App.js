import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Student from './components/Student';
import Contactus from './components/Contactus';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/student' element={<Student/>}/>
      <Route path='/contactus' element={<Contactus/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
