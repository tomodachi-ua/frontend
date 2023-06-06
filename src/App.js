import {Routes, Route, BrowserRouter} from "react-router-dom";

import './App.css';
import Layout from "./pages/Layout";
import About from "./pages/About";
import "./styles/common.scss"
import MangaList from "./pages/MangaList";
import MangaPage from "./pages/MangaPage";
function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<About/>}/>
              <Route path="/manga" element={<MangaList/>}/>
              <Route path="/manga/:id" element={<MangaPage/>}/>
            </Route>
            {/*<Route path='*' element={<Error404Page/>}/>*/}
          </Routes>
        </BrowserRouter>
    );
}

export default App;