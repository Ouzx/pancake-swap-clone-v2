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

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        {/* OZKAN'S PART HERE */}
        <UsedByMillions />
        {/* OTHERS HERE */}
        <Footer />

        {/* UTILS */}
        <BackToTop />
        <DarkMode />
      </div>
    </ThemeProvider>
  );
}

export default App;
