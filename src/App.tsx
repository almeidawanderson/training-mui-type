import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeProvider";
import { Drawer } from "@mui/material";
import { SideBar } from "./shared/components";

export const App = () => {
  return (
   
    <AppThemeProvider>
      <BrowserRouter>  

       <SideBar>
          <AppRoutes />
        </SideBar>  

      </BrowserRouter>
    </AppThemeProvider>    
  );
}

export default App;
