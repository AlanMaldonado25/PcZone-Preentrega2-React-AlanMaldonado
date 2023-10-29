
import './App.css'
import NavBar from './Components/NavBar/NavBar'
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Error from './Components/Error/Error'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path='*' element={<Error/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App 
