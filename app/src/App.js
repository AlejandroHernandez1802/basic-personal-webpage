import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import Studies from "./components/studies/Studies";
import ProductList from "./components/productList/ProductList";

function App() {
  return (
    <div className="App">
        <Intro />
        <About />
        <Studies />
        <ProductList />
    </div>
  );
}

export default App;
