import Khaled from "./sections/khaled/Index";

import Ozkan from "./sections/ozkan/Index";
import Ahmet from "./sections/ahmet/Index";

import "./App.scss";
import BackToTop from "./components/BackToTop/BackToTop";
import DarkMode from "./components/DarkMode";
import { ThemeProvider } from "./context/ThemeContext";
import UsedByMillions from "./sections/oguzhan/sections/UsedByMillions/UsedByMillions";
import Footer from "./sections/oguzhan/sections/Footer/Footer";
import Settings, { openSettings } from "./components/Settings/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="App">
          {/* OZKAN'S PART HERE */}
          <Ozkan />

          {/* <UsedByMillions /> */}
          <UsedByMillions />

          {/* OTHERS HERE */}

          {/* ULAS'S PART*/}
          <Khaled />
          <Ahmet />

          {/* <Footer /> */}
          <Footer />

          {/* UTILS */}
          <Settings />
          <BackToTop />
          <DarkMode />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
