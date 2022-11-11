import './App.scss';
import Header from './components/Header/Header';
import ProductCard from './components/ProductCard/ProductCard';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="products-list" style={{padding: '50px 30px'}}>
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
