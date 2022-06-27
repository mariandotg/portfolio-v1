import type { GetServerSideProps, NextPage } from 'next';
import { useSelector } from 'react-redux';

import About from '../components/About/About';
import Info from '../components/Info/Info';
import Skills from '../components/Skills/Skills';
import JobExperience from '../components/JobExperience/JobExperience';
import Education from '../components/Education/Education';
import CompEducation from '../components/CompEducation/CompEducation';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Header from '../components/Header/Header';
import { fetchData, selectData } from '../app/store/slices/data';
import { wrapper } from '../app';
import Footer from '../components/Footer/Footer';

const Home: NextPage = () => {
  const data = useSelector(selectData);
  console.log('testing', data);
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
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      await store.dispatch(fetchData()).unwrap();
    } catch (rejectedValueOrSerializedError) {
      console.log('error', rejectedValueOrSerializedError);
    }
    return {
      props: {},
    };
  });

export default Home;
