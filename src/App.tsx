import { Route, Routes } from "react-router-dom";
import "./App.css";
import NewsList from "./pages/posts";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/posts/:id" element={<NewsList />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
