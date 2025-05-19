
   const book = document.getElementById('book');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let position = 0;
  const step = 320; // Tamaño de imagen + margen (300px + 20px)
  let resetTimeout;

  function pauseAnimation() {
    book.style.animation = 'none';
    clearTimeout(resetTimeout);
    resetTimeout = setTimeout(() => {
      book.style.transform = 'none'; // reinicia posición
      book.style.animation = '';     // vuelve al CSS original
      position = 0;
    }, 5000); // 5 segundos sin interacción
  }

  nextBtn.addEventListener('click', () => {
    pauseAnimation();
    position -= step;
    if (Math.abs(position) >= book.scrollWidth / 2) {
      position = 0;
    }
    book.style.transform = `translateX(${position}px)`;
  });

  prevBtn.addEventListener('click', () => {
    pauseAnimation();
    position += step;
    if (position > 0) {
      position = -(book.scrollWidth / 2);
    }
    book.style.transform = `translateX(${position}px)`;
  });