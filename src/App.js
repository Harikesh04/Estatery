import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/Header.js"
import Rent from "./Rent/Rent.js"

function App() {
  return (
   <Router>
    <Header/>

    <Routes>
    <Route exact path="/rent" element={<Rent />} />
    
    
    </Routes>
   </Router>
  );
}

export default App;
