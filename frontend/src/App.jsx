import { Navigate, Route, Routes } from "react-router-dom";
// import Services from "./pages/Services";
// import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";
// import Solutions from "./pages/Solutions";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/" element={<Services />} />
      <Route path="/" element={<Industries />} /> */}
      <Route path="/about" element={<AboutUs />} />
      {/* <Route path="/" element={<Solutions />} /> */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
export default App;
