import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SidebarWithHeader from "./components/SidebarWithHeader";
import Home from "./Home";
import Overview from "./Overview";

function App() {
  return (
    <Router>
      <SidebarWithHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-wellbeing" element={<Overview />} />
      </Routes>
    </Router>
  );
}

export default App;
