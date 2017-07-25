<template>
    <div class="list">
        <ul>
            <li v-for="i in thelist" :key="i.id">
                <router-link :to="{path: '/detail', query: { id: i.id }}">
                    <img :src='i.url'></img>
                    <p>{{i.title}}</p>
                </router-link>
            </li>
        </ul>
        <a @click="loadmore" class="loadmore">加载更多</a>
    </div>
</template>

<script>
export default {
    name: 'list',
    data() {
        return {
            thelist: [],
            pageNo: 1
        }
    },
    created() {
        this.getList(this.pageNo)
    },
    methods: {
        async getList(pageNo) {
            let url = 'https://bird.ioliu.cn/v1?url=http://dili.bdatu.com/jiekou/mains/p' + pageNo + '.html';
            try {
                const posts = await this.$http.get(url);
                this.thelist = this.thelist.concat(posts.data.album)
            } catch (error) {
                console.log(error)
            }
        },
        loadmore(){
            this.pageNo = this.pageNo + 1
            this.getList(this.pageNo)
        }
    }
}
</script>

<style scoped>
ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-flow: row wrap;
}

ul li {
    flex: 1 1 auto;
    overflow: hidden;
    list-style: none;
    margin: 5px;
}

ul li a {
    overflow: auto;
    cursor: pointer;
    display: block;
}

ul li a img {
    width: 200px;
    height: 150px;
}

ul li a p {
    width: 200px;
}
.loadmore{
    margin: 0 auto 50px;
    cursor: pointer;
    background: #000;
    color: #fff;
    display: block;
    width: 200px;
    text-align: center;
    height: 30px;
    line-height: 30px;
}
</style>
