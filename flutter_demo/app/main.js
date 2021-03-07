flutterDemo = {
    data(){
        return {
            count: 0
        }
    },
    methods: {
        countClick(){
            this.count += 1;
        }
    }

}

Vue.createApp(flutterDemo).mount('#app')