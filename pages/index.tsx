import type { GetStaticProps, NextPage } from 'next';
import About from '../components/About/About';
import Info from '../components/Info/Info';
import Skills from '../components/Skills/Skills';
import JobExperience from '../components/JobExperience/JobExperience';
import Education from '../components/Education/Education';
import CompEducation from '../components/CompEducation/CompEducation';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Header from '../components/Header/Header';
import { getContentfulData } from '../services/contentful';
import contentfulDataAdapter from '../adapters/contentfulDataAdapter';

const Home: NextPage = ({ data }: any) => {
  console.log(data);
  return (
    <>
      <Header />
      <div className='h-[92px]'></div>
      <div className='flex flex-col gap-4 p-8'>
        <About />
        <Info />
        <Skills />
        <JobExperience />
        <Education />
        <CompEducation />
        <FeaturedProjects />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await getContentfulData();
  return {
    props: {
      data,
    },
  };
};

export default Home;
