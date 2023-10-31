import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { AppThemeProvider } from "./shared/contexts/ThemeProvider";
import { Drawer } from "@mui/material";
import { SideBar } from "./shared/components";
import { DrawerProvider } from "./shared/contexts";

export const App = () => {
  return (
   
    <AppThemeProvider>
      <DrawerProvider>
      <BrowserRouter>  

       <SideBar>
          <AppRoutes />
        </SideBar>  

      </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>    
  );
}

export default App;
