import type { NextPage } from 'next';
import About from '../components/About/About';
import Info from '../components/Info/Info';
import Skills from '../components/Skills/Skills';
import JobExperience from '../components/JobExperience/JobExperience';
import Education from '../components/Education/Education';

const Home: NextPage = () => {
  return (
    <div>
      <About />
      <Info />
      <Skills />
      <JobExperience />
      <Education />
    </div>
  );
};

export default Home;
