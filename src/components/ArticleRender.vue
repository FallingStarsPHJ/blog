<template>
  <div class="module-container">
    <div class="article-content" v-html="articleContent"></div>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'ArticleRender',
  data () {
    return {
      content: 'The ArticleRender Module.',
      articleContents: [],
      articleContent: ''
    }
  },
  activated: function () {
    let values = decodeURI(window.location.href).split('?')[1]
    if (values === undefined || values === '') {
      this.articleContent =
          '<div style="margin: auto; display: flex; justify-content: center; align-items: center">' +
            '<h1>空空如也，去文章列表找篇文章来看吧。</h1>' +
          '</div>'
      return
    }
    let buffer = values.split('&')
    let group = buffer[0].split('=')[1].replace(' ', '').trim()
    let number = buffer[1].split('=')[1].replace(' ', '').trim()
    Axios.get('articles/' + group + '/' + number + '.html')
            .then(response => {
              if (response === undefined) this.articleContent = '<div><h1>咦？什么都没有</h1></div>'
              else this.articleContent = response.data
            })
            .catch(response => {
              this.articleContent = '<div><h1>' + response.statusText + '</h1><h2>啊哦，网页丢了...</h2></div>'
            })
  }
}
</script>

<style scoped>
  .module-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    margin-top: 7vh;
    width: 100%;
  }
  .article-content {
    max-width: 95vw;
  }
  @media screen and (max-width: 768px){
    .module-container {
      margin-top: 10vh;
    }
  }
</style>
