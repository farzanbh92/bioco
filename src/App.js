import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/layout';
import Home from './components/home/home';
import Tutorial from './components/tutorial/tutorial';
import About from './components/about/about';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Layout/>}>
       <Route index element={<Home/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='tutorial' element={<Tutorial/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
