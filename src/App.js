import "./App.css";

//Components
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/shared/Navbar";
import ApiContextProvider from "./Context/ApiContextProvider";
import CartContextProider from "./Context/CartContextProider";

function App() {
  return (
    <>
      <ApiContextProvider>
        <CartContextProider>
          <Navbar />
          <Main />
          <Footer />
        </CartContextProider>
      </ApiContextProvider>
    </>
  );
}

export default App;
