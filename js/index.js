document.querySelectorAll('.side-bar svg').forEach(function(svg) {
    svg.addEventListener('click', function() {
        const sideBar2 = document.querySelector('.side-bar2');
        const contents = document.querySelector('.contents');
        if (sideBar2.style.display === 'none' || sideBar2.style.display === '') {
            sideBar2.style.display = 'block';
            contents.style.width = 'calc(100% - 15.83%)'; // 사이드바가 열렸을 때, 너비 조정
        } else {
            sideBar2.style.display = 'none';
            contents.style.width = '97.45%'; // 사이드바가 닫혔을 때, 너비 조정
        }
    });
});