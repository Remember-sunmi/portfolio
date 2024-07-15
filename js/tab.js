document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content .content');
    const links = document.querySelectorAll('.side-bar2 .link');

    function activateTab(target) {
        tabs.forEach(tab => {
            if (tab.classList.contains(target)) {
                tab.classList.add('active');
            } else {
                tab.classList.remove('active');
            }
        });

        contents.forEach(content => {
            if (content.classList.contains(target)) {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });
    }

    function activateLink(link) {
        links.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            const target = tab.classList[1];
            activateTab(target);
        });
    });

    links.forEach(link => {
        link.addEventListener('click', function () {
            const target = link.getAttribute('data-target');
            activateTab(target);
            activateLink(link);
        });
    });
});