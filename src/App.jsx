import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import {createContext} from 'react';
import Navigat from './components/navigation';
import { Home } from './pages/home';
import { Shoping } from './pages/shoping';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LogForShop } from './pages/login';



export const dataContext = createContext()
function App() {

  return (
   
    <div className="App gradient">
    
    <Router>
      <div className=' navigatMenu col-12 container-fluid'>
        <Navigat/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/shoping/*" element={<Shoping/>} />
        <Route path="/LogForShop" element={<LogForShop/>} />

      </Routes>
    </Router>
 </div>

  );
}

export default App;
