import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header/>
      <Banner image="home">

      </Banner>
      <Container>
        <h2>Geografia</h2>
        <Card />
      </Container>
      <Footer/>
    </>
  );

  
}

export default App;
