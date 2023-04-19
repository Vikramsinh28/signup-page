import './App.css';
import Signup from './pages/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
