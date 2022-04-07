import { Route, Routes } from "react-router-dom";
import "./App.css";
import NewsList from "./pages/posts";
import Home from "./pages/home";
import { SpaceContextProvider } from "./components/spaceContext";

function App() {
  return (
    <div className="App">
      <SpaceContextProvider>
        <Routes>
          <Route path="/posts/:id" element={<NewsList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </SpaceContextProvider>
    </div>
  );
}

export default App;
