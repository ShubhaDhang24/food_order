import { useContext } from "react";
import Header from "./Header";
import Product from "./Product";
import { ThemeContext } from "./Theme";
import { CartProvider } from "react-use-cart";

function App() {

  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log("theme", theme);
  return (
    <>
    <div
      className="App"
      style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
    >
      
        <button className="corner-button" onClick={toggleTheme}>
          Toggle Theme
        </button>
        <CartProvider>
        <Header />
        <Product />
        </CartProvider>
        </div>
       
    
    </>
  );
}

export default App;
