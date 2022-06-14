import type { NextPage } from 'next';
import About from '../components/About/About';
import Info from '../components/Info/Info';
import Skills from '../components/Skills/Skills';

const Home: NextPage = () => {
  return (
    <div>
      <About />
      <Info />
      <Skills />
    </div>
  );
};

export default Home;
