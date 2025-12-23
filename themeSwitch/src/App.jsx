import "./App.css";
import ThemeProvider from "./contexts/ThemeContextProvider";
import UserProvider from "./contexts/UserContextProvider";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <ThemeProvider>
        <UserProvider>
          <Navbar />
        </UserProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
