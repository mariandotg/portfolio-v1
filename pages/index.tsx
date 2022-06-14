import type { NextPage } from 'next';
import About from '../components/About/About';
import Info from '../components/Info/Info';

const Home: NextPage = () => {
  return (
    <div>
      <About />
      <Info />
    </div>
  );
};

export default Home;
