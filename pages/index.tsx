import type { NextPage } from 'next';
import About from '../components/About/About';
import Info from '../components/Info/Info';
import Skills from '../components/Skills/Skills';
import JobExperience from '../components/JobExperience/JobExperience';
import Education from '../components/Education/Education';
import CompEducation from '../components/CompEducation/CompEducation';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col gap-4 p-8'>
      <About />
      <Info />
      <Skills />
      <JobExperience />
      <Education />
      <CompEducation />
      <FeaturedProjects />
    </div>
  );
};

export default Home;
