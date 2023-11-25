import Banner from "./components/Banner/Banner";
import Header from "./components/Header/Header";
import FoodsList from "./components/FoodsList/index.jsx";
import Footer from "./components/Footer";
import SubNavbar from "./components/SubNavbar/index.jsx";

function App() {
  return (
    <main className="container">
      <Header />
      <Banner />
      <SubNavbar />
      <FoodsList title="Лаваш" />
      <FoodsList title="Бургеры" />
      <FoodsList title="Клаб-Сэндвич" />
      <SubNavbar />
      <Footer />
    </main>
  );
}

export default App;
