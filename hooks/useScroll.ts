import { useState, useEffect } from 'react';

const useScroll = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState('0%');

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;

      if (scrolled > 300) setVisible(true);
      else if (scrolled <= 300) setVisible(false);
    };

    const calculateScrollDistance = () => {
      const totalScroll = document.documentElement.scrollTop;
      const winHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const value = (totalScroll / winHeight) * 100;
      const percent = `${value}%`;

      if (value > 95) setScrollPercent('100%');
      else setScrollPercent(percent);
    };

    const scrollListener = () => {
      toggleVisible();
      calculateScrollDistance();
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [setScrollPercent]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return { visible, scrollToTop, scrollPercent };
};

export default useScroll;
