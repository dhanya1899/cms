import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Complaint from "./pages/complaint";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <img
        src="https://asett.cms.gov/resource/1549656663000/Images/all-purpose-banner-v3.jpg"
        alt="Logo"
      />
      <Header />
      <Complaint />
      <Footer />
    </div>
  );
}

export default App;
