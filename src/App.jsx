import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Donate from "./pages/Donate";
import Report from "./pages/Report";
import Profile from "./pages/Profile";

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  function renderPage() {
    switch (currentPage) {
      case "Home":
        return <Home onNavigate={setCurrentPage} />;
      case "About":
        return <About />;
      case "Donate":
        return <Donate />;
      case "Report":
        return <Report />;
      case "Profile":
        return <Profile />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;