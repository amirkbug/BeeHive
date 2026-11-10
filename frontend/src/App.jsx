import Authentication from "./pages/Authentication";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Data from "./pages/Data";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import AppLayout from "./ui/AppLayout";
import SettingsGeneral from "./pages/SettingsGeneral";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Authentication />} />
          <Route path="app" element={<AppLayout />}>
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />}>
              <Route path="general" element={<SettingsGeneral />} />
              <Route path="notifications" element={<p>NOTIFICATIONS</p>} />
              <Route path="customazation" element={<p>CUSTOMAZATION</p>} />
              <Route path="kpi-management" element={<p>KPI-MANAGEMENT</p>} />
              <Route path="about-us" element={<p>ABOUT-US</p>} />
            </Route>
            <Route path="data" element={<Data />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="aboutus" element={<AboutUs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;
