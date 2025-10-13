import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SerchingData from './serching/SerchingData';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SerchingData />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
