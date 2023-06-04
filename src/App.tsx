import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";

import BackToTop from "./components/BackToTop/BackToTop";
import SlideMode from "./components/SlideMode/SlideMode";
import DarkMode from "./components/DarkMode";
import Settings from "./components/Settings/Settings";
import Slider from "./components/Slider/Slider";

import Khaled from "./sections/khaled/Index";

import Ozkan from "./sections/ozkan/Index";
import Ahmet from "./sections/ahmet/Index";
import UsedByMillions from "./sections/oguzhan/sections/UsedByMillions/UsedByMillions";
import Footer from "./sections/oguzhan/sections/Footer/Footer";
import Trade from "./sections/ulas/Trade";
import Earn from "./sections/ulas/Earn";

import "./App.scss";
import MobileNavBar from "./components/MobileNavBar/MobileNavBar.component";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="App">
          {/* Mobile Navigation bar */}
          <MobileNavBar />

          {/* OZKAN'S PART HERE */}
          <Ozkan>
            <Slider />
          </Ozkan>

          {/* <UsedByMillions /> */}
          <UsedByMillions />
          {/* ULAS'S PART*/}
          <Trade />
          <Earn />
          {/* OTHERS HERE */}

          <Khaled />
          <Ahmet />

          {/* <Footer /> */}
          <Footer />

          {/* UTILS */}
          <Settings />
          <BackToTop />
          <SlideMode Speed={1} />
          <DarkMode />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
