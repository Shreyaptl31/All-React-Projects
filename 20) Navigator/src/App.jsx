import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Crudop from './CRUD/Crudop';
import UpdateData from './CRUD/UpdateData';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Crudop />} />
          <Route path="/updatedata/:id" element={<UpdateData />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
