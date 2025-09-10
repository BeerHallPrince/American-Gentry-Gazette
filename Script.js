// Get form and article list
const storyForm = document.getElementById("storyForm");
const articleList = document.getElementById("article-list");

// Load saved stories from local storage
let stories = JSON.parse(localStorage.getItem("stories")) || [];

// Render stories
function renderStories() {
  articleList.innerHTML = "";
  stories.forEach((story, index) => {
    const article = document.createElement("div");
    article.classList.add("article");
    article.innerHTML = `
      <h3>${story.title}</h3>
      <p>${story.content}</p>
    `;
    articleList.appendChild(article);
  });
}

// Handle form submit
storyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  const newStory = { title, content };
  stories.unshift(newStory); // Add story to the beginning
  localStorage.setItem("stories", JSON.stringify(stories));

  storyForm.reset();
  renderStories();
});

// Initial render
renderStories();
