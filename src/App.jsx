
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientRegistration from "./pages/PatientRegistration";
import Button from "./components/Button";
import Inputfield from "./components/Inputfield";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<PatientRegistration />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

