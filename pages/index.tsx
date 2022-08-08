import type { GetServerSideProps, NextPage } from 'next';

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import Header from '../components/Header/Header';
import About from '../components/About/About';
import Info from '../components/Info/Info';
import Skills from '../components/Skills/Skills';
import Education from '../components/Education/Education';
import JobExperience from '../components/JobExperience/JobExperience';
import FeaturedProjects from '../components/FeaturedProjects/FeaturedProjects';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import IconButton from '../components/Buttons/IconButton';

import { fetchData } from '../app/store/slices/data';
import { wrapper } from '../app';
import useScroll from '../hooks/useScroll';

const Home: NextPage = () => {
  const { visible, scrollToTop } = useScroll();

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
        <Contact />
      </div>
      <IconButton
        clickFunction={scrollToTop}
        style={visible ? 'inline' : 'hidden'}
      >
        <KeyboardDoubleArrowUpIcon />
      </IconButton>
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
