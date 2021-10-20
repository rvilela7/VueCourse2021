const App = {
    template: `
        <div class="app" :class="darkMode ? 'dark' : ''">
            <Navbar :dark="darkMode" @changeTheme="onChangeTheme" />
            
            <div class="ui main text container">
                <ArticleForm :articles="articles" @articleCreated="onArticleCreated" />
                <ArticleList :articles="articles" />
            </div>
        </div>
    `,
    data: () => ({
        darkMode: false,
        articles: []
    }),
    methods: {
        onChangeTheme(isDark) {
            this.darkMode = isDark
        },

        onArticleCreated(article) {
            this.articles.push(article);
        }
    }
};

export default App;