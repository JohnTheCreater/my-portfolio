
import './App.scss'
import Layout from './components/Layout'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
function App() {
  return (
   <><Routes>
    <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}></Route></Route>
   </Routes>
   </>
  );
}

export default App;
