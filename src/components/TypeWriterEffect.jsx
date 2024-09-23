import { useEffect } from 'react';

const TypeWriterEffect = () => {
  useEffect(() => {
    class TypeWriter {
      constructor(txtElement, words, wait = 2000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
      }

      type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
        this.txtElement.innerHTML = `<span class="txt" style="color: #FFBE2E;">${this.txt}</span>`;

        let typeSpeed = 200;

        if (this.isDeleting) {
          typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
          typeSpeed = this.wait;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          this.wordIndex++;
          typeSpeed = 300;
        }

        setTimeout(() => this.type(), typeSpeed);
      }
    }

    // Initialize the typewriter effect on DOM load
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    if (txtElement && words) {
      new TypeWriter(txtElement, words, wait);
    }
  }, []);

  return null; // No actual render output, it's just an effect
};

export default TypeWriterEffect;
