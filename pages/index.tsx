import type { GetServerSideProps, NextPage } from 'next';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Info from '../components/Info/Info';
import Skills from '../components/Skills/Skills';
import Education from '../components/Education/Education';
import JobExperience from '../components/JobExperience/JobExperience';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Footer from '../components/Footer/Footer';

import { fetchData } from '../app/store/slices/data';
import { wrapper } from '../app';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col gap-16 p-4'>
        <About />
        <div className='flex flex-col gap-8'>
          <Info />
          <Skills />
          <Education />
          <JobExperience />
        </div>
        <FeaturedProjects />
      </div>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ locale }) => {
    try {
      await store.dispatch(fetchData(locale!)).unwrap();
    } catch (rejectedValueOrSerializedError) {
      console.log('error', rejectedValueOrSerializedError);
    }
    return {
      props: {},
    };
  });

export default Home;
