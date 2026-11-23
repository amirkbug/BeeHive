import Authentication from "./pages/Authentication";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Data from "./pages/Data";
import Dashboard from "./pages/Dashboard";
import AboutUs from "./pages/AboutUs";
import AppLayout from "./ui/AppLayout";
import General from "./features/settings/general/General";
import Notifications from "./features/settings/notifications/notifications";
import Customazation from "./features/settings/customazation/Customazation";
import KpiManegement from "./features/settings/kpiManagement/KpiManegement";
import AboutBeeHive from "./features/settings/aboutBeeHive/AboutBeeHive";

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
              <Route index element={<General />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="customazation" element={<Customazation />} />
              <Route path="kpi-management/:id" element={<KpiManegement />} />
              <Route path="about-us" element={<AboutBeeHive />} />
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
