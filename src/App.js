import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import HomePage from './Components/HomePage';
import CreatePost from './Components/CreatePost';

function App() {

  return (

    <BrowserRouter>

      <div>
       
        <Routes>

          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />

          <Route path='/home' element={<HomePage/>} />
          <Route path='/modal' element={<CreatePost/>} />


        </Routes>

        
       
      </div>

    </BrowserRouter>

      
  );
}

export default App;
