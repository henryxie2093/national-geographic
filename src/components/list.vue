<template>
  <div class="list">
    <ul>
      <li v-for="i in thelist">
        <router-link :to="{path: '/detail', query: { id: i.id }}">
          <img :src='i.url'></img>
          <p>{{i.title}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'list',
    data() {
      return {
        thelist: []
      }
    },
    created() {
      const self = this
      self.$http.get('https://bird.ioliu.cn/v1?url=http://dili.bdatu.com/jiekou/mains/p1.html')
        .then(function(res) {
          self.thelist = res.data.album
          self.$http.get('https://bird.ioliu.cn/v1?url=http://dili.bdatu.com/jiekou/mains/p2.html').
          then(function  (ress) {
            self.thelist = self.thelist.concat(ress.data.album)
          })
          .catch(function  () {
            console.log(err);
          })
        })
        .catch(function(err) {
          console.log(err);
        })
    },
    methods: {}
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
</style>
