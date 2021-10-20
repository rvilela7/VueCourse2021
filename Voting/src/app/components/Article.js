
const Article = {
    props: ['article'],
    template: `
        <div class="row article">
            <div class="four wide column center aligned votes">
                <div class="ui statistic">
                    <div class="value">
                        {{ article.votes }}
                    </div>
                    <div class="label">
                        Points
                    </div>
                </div>
            </div>

            <div class="twelve wide column">
                <a :href="article.link" class="ui large header">
                    {{ article.title }}
                </a>

                <div class="meta">{{ article.domain() }}</div>

                <ul class="ui big horizontal list voters">
                    <li class="item">
                        <a href="javascript:void(0)" @click="addVote">
                            <i class="arrow up icon"></i>
                            upvote
                        </a>
                    </li>
                    <li class="item">
                        <a href="javascript:void(0)" @click="removeVote">
                            <i class="arrow down icon"></i>
                            downvote
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `,
    methods: {
        addVote() {
            this.article.increment();
        },
        removeVote() {
            this.article.decrement();
        }
    }
};

export default Article;