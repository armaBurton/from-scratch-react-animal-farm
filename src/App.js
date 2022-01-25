// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';
import { animals } from './data';

const date = new Date();

function App() {
  return (
    <section>
      <Header name = {`Alchemy Animal Farm`} />


      <Main animals = { animals } />

      <Footer year = { `${date.getFullYear() - 1} - ${date.getFullYear()}` } />
    </section>
  );
}

export default App;
