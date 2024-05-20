document.addEventListener("DOMContentLoaded", () => {
    // Fetch data from JSON files
    Promise.all([
        fetch('authors.json').then(response => response.json()),
        fetch('news.json').then(response => response.json())
    ]).then(([authors, news]) => {
        const newsContainer = document.querySelector('.news-container');

        const currentNews = news[0]; // Just taking the first news item for example

        // Populate news header
        document.querySelector('.header-image').src = currentNews.image;
        document.querySelector('.news-date').textContent = currentNews.date;
        document.querySelector('.news-title').textContent = currentNews.title;
        document.querySelector('.news-description').textContent = currentNews.description;

        const author = authors.find(author => author.id === currentNews.authorId);
        document.querySelector('.news-author').textContent = author ? author.name : 'Unknown Author';

        // Populate pagination (for demonstration, we'll just create static pagination)
        const paginationContainer = document.querySelector('.news-pagination');
        for (let i = 1; i <= 57; i++) {
            const pageItem = document.createElement('span');
            pageItem.className = 'pagination-item';
            pageItem.textContent = i;
            if (i === 11) {
                pageItem.classList.add('active');
            }
            paginationContainer.insertBefore(pageItem, paginationContainer.children[paginationContainer.children.length - 1]);
        }
    });
});