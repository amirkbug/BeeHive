import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Data from "./pages/Data";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Authentication />} />
        <Route path="app" element={<AppLayout />}>
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="data" element={<Data />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
