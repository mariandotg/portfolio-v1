import type { GetStaticProps, NextPage } from 'next';

import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

import SEO from '../components/SEO/SEO';
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
      <SEO />
      <Header />
      <div className='flex justify-center'>
        <div className='flex flex-col tablet:max-w-5xl'>
          <div className='flex flex-col gap-16 p-4'>
            <About />
            <div className='flex flex-col gap-8 tablet:grid tablet:grid-cols-3 tablet:gap-4'>
              <section className='flex flex-col gap-8 tablet:row-span-4 tablet:gap-4'>
                <Info />
                <Skills />
              </section>
              <Education />
              <JobExperience />
              <FeaturedProjects />
            </div>
          </div>
          <Contact />
          <Button
            variant='primary'
            onClick={scrollToTop}
            className={`${
              visible ? 'inline' : 'hidden'
            } fixed bottom-4 right-4`}
            icon
          >
            <KeyboardDoubleArrowUpIcon />
          </Button>
          <Footer />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) =>
    async ({ locale }) => {
      try {
        await store
          .dispatch(fetchData({ type: 'section', lang: locale! }))
          .unwrap();
      } catch (rejectedValueOrSerializedError) {
        console.log('error', rejectedValueOrSerializedError);
      }
      return {
        props: {},
        revalidate: 1,
      };
    }
);

export default Home;
