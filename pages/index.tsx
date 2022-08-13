import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

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
import Button from '../components/Buttons/Button';

import { fetchData } from '../app/store/slices/data';
import { wrapper } from '../app';
import useScroll from '../hooks/useScroll';

const Home: NextPage = () => {
  const { visible, scrollToTop } = useScroll();

  return (
    <>
      <Head>
        <link rel='icon' href='./favicon.ico' />
      </Head>
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
      <Button
        variant='primary'
        onClick={scrollToTop}
        className={`${visible ? 'inline' : 'hidden'} fixed bottom-4 right-4`}
        icon
      >
        <KeyboardDoubleArrowUpIcon />
      </Button>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ locale }) => {
      try {
        await store.dispatch(fetchData(locale!)).unwrap();
      } catch (rejectedValueOrSerializedError) {
        console.log('error', rejectedValueOrSerializedError);
      }
      return {
        props: {},
      };
    }
);

export default Home;
