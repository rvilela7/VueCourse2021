const ArticleList = {
    props: ['articles'],
    template: `
        <div class="ui grid posts">
            <span v-if="articles.length === 0">No articles</span>
            <Article v-for="article in sortedArticles" :article="article" />
        </div>
    `,
    computed: {
        sortedArticles() {
            return this.articles.sort((a, b) => b.votes - a.votes);
        }
    }
};

export default ArticleList;