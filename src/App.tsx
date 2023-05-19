import Khaled from "./sections/khaled/Index";
import Ulas from "./sections/ulas/Index";
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

import TradeAnything from "./sections/ulas/sections/Trade/TradeAnything";
import Earn from "./sections/ulas/sections/Earn/Earn";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="App">
          <Settings />
          {/* OZKAN'S PART HERE */}

          <Ozkan />
          {/* <UsedByMillions /> */}
          {/* OTHERS HERE */}
          {/* <Footer /> */}
          <TradeAnything />
          <Earn />
          <Khaled />
          <UsedByMillions />
          <Ahmet />
          <Footer />
          {/* UTILS */}
          <BackToTop />
          <DarkMode />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
