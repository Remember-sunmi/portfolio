const customCursor = (e) => {
    const cursor = document.querySelector('.js-cursor');
    const hoverEl = document.querySelectorAll('.js-cursor-hover')
    const { pageX: posX, pageY: posY } = e;
    
    const runMouseOver = () => {
      cursor.style.transform = 'scale(2)';
    };
    hoverEl.forEach(hover => hover.addEventListener('mouseenter', runMouseOver));
    
    const runMouseLeave = () => {
      cursor.style.transform = '';
      cursor.style.background = '';
    };
    hoverEl.forEach(hover => hover.addEventListener('mouseleave', runMouseLeave));
    
      return (
      cursor.style.left = `${posX - 10}px`,
      cursor.style.top = `${posY - 10}px`  
    );
  };
  
  document.addEventListener('mousemove', customCursor); 