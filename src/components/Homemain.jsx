import React, { useEffect } from 'react';
import Header from './Header';
import Homepage from './Homepage';
import TypeWriterEffect from './TypeWriterEffect';
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/select2.min.css';
import '../assets/build/css/countrySelect.css';
import '../assets/css/owl.carousel.min.css';
import '../assets/css/owl.theme.default.min.css';

const Homemain = () => {
  useEffect(() => {
    // Script loading order - jQuery first
    const scripts = [
      'src/assets/js/jquery-3.6.0.min.js', // jQuery should be loaded first
      'src/assets/js/popper.min.js',
      'src/assets/js/bootstrap.min.js',
      'src/assets/js/owl.carousel.min.js',
      'src/assets/js/select2.min.js',      // select2 depends on jQuery
      'src/assets/build/js/countrySelect.js',
      'src/assets/js/custom.js'
    ];

    const loadScript = (scriptUrl) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = scriptUrl;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`${scriptUrl} failed to load`));
        document.body.appendChild(script);
      });
    };

    const loadAllScripts = async () => {
      for (const scriptUrl of scripts) {
        try {
          await loadScript(scriptUrl);
        } catch (error) {
          console.error(error);  // Only log errors now
        }
      }
    };

    loadAllScripts();

    // Cleanup scripts on component unmount
    return () => {
      scripts.forEach((scriptUrl) => {
        const script = document.querySelector(`script[src="${scriptUrl}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <Header />
      <Homepage />
      <TypeWriterEffect />
    </>
  );
};

export default Homemain;
