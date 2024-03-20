
import "./index.css"
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import Search from "./pages/Search"
function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
      </Routes>

      <Routes>
        <Route path="/search" element={<Layout><Search/></Layout>} />
      </Routes>


    </Router>
  )
}

export default App