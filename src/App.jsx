import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

import AppLayout from "./ui/AppLayout";
import Overview from "./page/Overview";
import SalesReport from "./page/SalesReport";
import Inventory from "./page/Inventory";
import Customer from "./page/Customer";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="overview" />} />
              <Route path="overview" element={<Overview />} />
              <Route path="salesreport" element={<SalesReport />} />
              <Route path="inventory" element={<Inventory />} />
              <Route path="customer" element={<Customer />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
