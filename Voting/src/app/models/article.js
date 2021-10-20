export default class Article {

    title;
    link;
    votes;

    constructor(title, link, votes = 0) {
        this.title = title;
        this.link = link;
        this.votes = votes;
    }

    increment() {
        this.votes++;
    }

    decrement() {
        this.votes--;
    }

    domain() {
        try {
            const domainAndPath = this.link.split('//')[1];
            return domainAndPath.split('/')[0];
        } catch (err) {
            return null;
        }
    }
}