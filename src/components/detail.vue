<template>
    <div class="detail">
        <ul>
            <li v-for='pic in piclist' :key="pic.thumb">
                <img :src="pic.thumb" alt="">
                <p>
                    <span>{{pic.title}}</span><br>
                    {{pic.content}}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      piclist: []
    };
  },
  created() {
    var self = this;
    var url =
      "https://bird.ioliu.cn/v1?url=http://dili.bdatu.com/jiekou/albums/a" +
      this.$route.query.id +
      ".html";
    self.$http
      .get(url)
      .then(function(res) {
        self.piclist = res.data.picture;
      })
      .catch(function(err) {
        console.log(err);
      });
  }
};
</script>

<style lang="less" scoped>
.detail {
  background-color: #3e3e3e;
  color: #fff;
}
ul {
  list-style: none;
}
ul li img {
  height: 80vh;
  // width: 90vw;
}
p {
  height: 20vh;
}
p span {
  font-weight: 600;
}
</style>
