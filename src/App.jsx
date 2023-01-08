import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <div>
        <Header
          title="Galería de Imágenes con
        React"
        />
      </div>
      <hr />
      <main className="d-flex justify-content-evenly text-black my-5">
        <Card
          src="https://images.pexels.com/photos/2684218/pexels-photo-2684218.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          title="Lexus"
          text="Lexus rojo ultima generacion"
        />
        <Card
          src="https://images.pexels.com/photos/4674338/pexels-photo-4674338.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          title="NISSAN"
          text="Nissan deportivo de alta gama"
        />
        <Card
          src="https://images.pexels.com/photos/4674347/pexels-photo-4674347.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          title="Ford"
          text="Ford F-150"
        />
      </main>
      <hr />
      <div>
        <Footer text="Galeria de autos modernos. Lo ultimo en gama de vehiculos" />
      </div>
    </div>
  );
};

export default App;
