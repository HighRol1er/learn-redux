import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/:id" element={ <Detail /> } />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
