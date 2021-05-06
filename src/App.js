import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';

const App = () => (
  <Router>
    <Header />
    {/* <Routes /> */}
    <Footer />
  </Router>
);

export default App;
