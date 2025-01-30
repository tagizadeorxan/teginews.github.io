const apiKey = '2c35ef06c56b4c26a0fe06229b0677df';
const url = `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        
        let articles = data.articles;
        let newsContainer = document.getElementById("news-container");
        
        articles.forEach(article => {
            let newsElement = document.createElement("div");
            newsElement.className = "article";
            newsElement.innerHTML = `
                <img src="${article.urlToImage}" alt="News Image">
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            `;
            newsContainer.appendChild(newsElement);
        });
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

fetchNews();
