import type { NextPage } from 'next';
import About from '../components/About/About';
import Info from '../components/Info/Info';
import Skills from '../components/Skills/Skills';
import JobExperience from '../components/JobExperience/JobExperience';

const Home: NextPage = () => {
  return (
    <div>
      <About />
      <Info />
      <Skills />
      <JobExperience />
    </div>
  );
};

export default Home;
