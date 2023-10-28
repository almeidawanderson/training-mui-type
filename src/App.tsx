import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { DarkTheme, LightTheme } from "./shared/themes";
import { AppThemeProvider } from "./shared/contexts/ThemeProvider";

export const App = () => {
  return (
   
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
    
  );
}

export default App;
