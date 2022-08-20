import "./App.css";

//Components
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/shared/Navbar";
import ApiContextProvider from "./Context/ApiContextProvider";

function App() {
  return (
    <>
      <ApiContextProvider>
        <Navbar />
        <Main />
        <Footer />
      </ApiContextProvider>
    </>
  );
}

export default App;
