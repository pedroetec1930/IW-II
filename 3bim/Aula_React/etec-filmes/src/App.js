import Banner from "./components/Banner";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Card from "./components/Card";
import css from "../src/index.css"
import videos from "./json/db.json"
 

function App() {
  return (
    <>
      <Header/>
      <Banner image="home">
      </Banner>
      <Container>
        <h2>Geografia</h2>
        <section className="cards">
          {
            videos.map(video =>{
              return <Card id={video.id}/>
            })
          }
        </section>
      </Container>
      <Footer/>
    </>
  );

  
}

export default App;
