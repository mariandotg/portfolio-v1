import { useState, useEffect } from 'react';

const useScroll = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;

    if (scrolled > 300) setVisible(true);
    else if (scrolled <= 300) setVisible(false);
  };

  const getDocHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  useEffect(() => {
    const calculateScrollDistance = () => {
      requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;
        const docHeight = getDocHeight();

        const totalDocScrollLength = docHeight - windowHeight;
        const scrollPosition = (scrollTop / totalDocScrollLength) * 100;

        setScrollPosition(scrollPosition);
      });
    };

    window.addEventListener('scroll', toggleVisible);
    window.addEventListener('scroll', calculateScrollDistance);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
      window.removeEventListener('scroll', calculateScrollDistance);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return { visible, scrollToTop, scrollPosition };
};

export default useScroll;
