
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PatientRegistration from "./pages/PatientRegistration";
import Button from "./components/Button";
import Inputfield from "./components/Inputfield";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/patient-registration"
          element={<PatientRegistration />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

