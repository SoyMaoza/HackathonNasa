import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/Inicio';
import Navbar from './Components/Navbar/Navbar';
import Expolanetas from './Pages/Expolanetas';
import Contribuyentes from './Pages/Contribuyentes';

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Inicio />} />
                    <Route path='/exoplanetas' element={<Expolanetas />} />
                    <Route path='/contribuyentes' element={<Contribuyentes />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
