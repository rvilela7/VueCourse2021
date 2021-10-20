const Navbar = {
    props: ['dark'],
    template: `
        <div class="ui menu" :class="isInverted">
            <div class="ui container">
                <div class="header item borderless">
                    <h1 class="ui header" :class="isInverted">Vue Votes</h1>    
                </div>
                <div class="right item">
                    <a href="javascript:void(0)" @click="changeTheme">
                        <i v-if="dark" class="sun icon"></i>
                        <i v-else class="moon icon"></i>
                    </a>
                </div>
            </div>
        </div>
    `,
    computed: {
        isInverted() {
            return this.dark ? 'inverted' : '';
        }
    },
    methods: {
        changeTheme() {
            this.$emit('changeTheme', !this.dark);
        }
    }
};

export default Navbar;