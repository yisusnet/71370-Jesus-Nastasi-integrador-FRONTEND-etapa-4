import { useEffect, useRef } from 'react';

const useScrollHide = () => {
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const elementsToHide = [
        document.querySelector('.section-cards__header'),
        document.querySelector('.nosotros__header'),
        document.querySelector('.contact__header'),
        document.querySelector('.search-bar'),
      ];

      elementsToHide.forEach((el) => {
        if (el) {
          if (st > lastScrollTop.current) {
            el.classList.add('hidden');
          } else {
            el.classList.remove('hidden');
          }
        }
      });

      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default useScrollHide;
