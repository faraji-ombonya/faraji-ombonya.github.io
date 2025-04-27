import "./App.css";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ArticlesPage from "./pages/ArticlesPage";
import { HashRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="about" element={<AboutPage />}></Route>
            <Route path="articles" element={<ArticlesPage />}></Route>
            <Route path="projects" element={<ProjectsPage />}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
