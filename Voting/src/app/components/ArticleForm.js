import Article from "../models/article.js";

const ArticleForm = {
    props: ['articles'],
    template: `
        <form class="ui large form segment">
            <h3 class="ui header">Add Link</h3>

            <div class="field">
                <label for="title">Title:</label>
                <input type="text" name="title" v-model="title">
            </div>

            <div class="field">
                <label for="link">Link:</label>
                <input type="text" name="link" v-model="link">
            </div>
            <button class="ui positive right floated button" @click="addArticle">Submit Link</button>

            <span v-if="errorMessage">{{ errorMessage }}</span>
        </form>
    `,
    data: () => ({
        title: '',
        link: '',
        errorMessage: ''
    }),
    methods: {
        addArticle(event) {
            event.preventDefault();
            
            if (!this.formIsValid()) {
                return false;
            }

            const article = new Article(this.title, this.link);
            this.$emit('articleCreated', article);

            this.resetForm();
        },

        formIsValid() {
            this.errorMessage = '';

            if (this.title.trim() === '' || this.link.trim() === '') {
                this.errorMessage = 'Title and link are required.';
                return false;
            }

            if (this.articles.find(a => a.title === this.title && a.link === this.link) != null) {
                this.errorMessage = 'Article already added!';
                return false;
            }

            return true;
        },

        resetForm() {
            this.title = '';
            this.link = '';
        }
    }
};

export default ArticleForm;