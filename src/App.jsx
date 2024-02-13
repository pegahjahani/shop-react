import {react , createContext, useState, useEffect} from 'react';
import Navigat from './components/navigation';
import './App.css';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Shoping } from './pages/shoping';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './components/store';
import 'bootstrap/dist/css/bootstrap.min.css';

export const dataContext = createContext()
function App() {
  const [dataList , setDataList] = useState({})
  const getData = async ()=>{
   const response = await axios.get('https://jsonplaceholder.typicode.com/users')
   setDataList(response.data)
  
  }
  useEffect(()=>{
    getData()
  } , [])
  return (
    <Provider store={store}>
    <div className="App ">
      <dataContext.Provider value={[dataList , setDataList]}>
    <Router>
      <div className=' navigatMenu col-12'>
        <Navigat/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Shoping/*" element={<Shoping/>}/>
      </Routes>
    </Router>
    </dataContext.Provider>
    </div>
    </Provider>
  );
}

export default App;
