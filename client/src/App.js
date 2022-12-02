import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar'
import Home from './pages/Home'
import View from './pages/View'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className="pages">
          <Routes>
            <Route
              path='/'
              element={<Home/>}
            />
            <Route
              path='/:_id'
              element={<View/>}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
