import App from "./components/App.js";
import Navbar from "./components/Navbar.js";
import ArticleForm from "./components/ArticleForm.js";
import ArticleList from "./components/ArticleList.js";
import Article from "./components/Article.js";

const app = Vue.createApp(App);

app.component('Navbar', Navbar, { emits: ['changeTheme'] });
app.component('ArticleForm', ArticleForm, { emits: ['articleCreated'] });
app.component('ArticleList', ArticleList);
app.component('Article', Article);

app.mount('#app');
