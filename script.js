function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const container = document.getElementById('container');
    if (sidebar.style.left === '-250px') {
        sidebar.style.left = '0';
        container.style.marginLeft = '250px';
    } else {
        sidebar.style.left = '-250px';
        container.style.marginLeft = '0';
    }
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });
    const page = document.getElementById(pageId);
    page.style.display = 'flex';

    // Change sidebar and page color based on active page
    document.querySelectorAll('.sidebar ul li a').forEach(link => {
        link.style.color = link.href.includes(pageId) ? '#e50914' : 'white';
    });
}

document.getElementById('theme-button').addEventListener('click', () => {
    document.body.classList.toggle('theme-purple');
});

document.getElementById('brightness-button').addEventListener('click', () => {
    document.body.classList.toggle('theme-light');
});