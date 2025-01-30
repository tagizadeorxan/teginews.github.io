const url = "./data.json";

async function fetchNews() {
    try {
        let response = await fetch(url);
        let data = await response.json();
        
        let articles = data.articles;
        let newsContainer = document.getElementById("news-container");

        articles.forEach(article => {
            let newsElement = document.createElement("div");
            newsElement.className = "article";
            
            // Format the date to a readable format
            let publishedDate = new Date(article.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });

            newsElement.innerHTML = `
                <img src="${article.urlToImage}" alt="News Image">
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <p><strong>Published on:</strong> ${publishedDate}</p>
            `;
            newsContainer.appendChild(newsElement);
        });
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

fetchNews();
