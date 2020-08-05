<template>
  <div class="module-container">
    <ul class="ul-style-no">
      <li v-for="article in articles" v-bind:key="article.name">
        <div class="article-link">
          <h3>
            <router-link class="card-link" :to="'/article_render?group=' + article.group + '&number=' + article.number">
              <span>{{'[ ' + article.tag + ' ]' + ' ' + article.name}}</span>
            </router-link>
          </h3>
          <span class="display-block" style="margin-left: 0.5rem; font-size: 1.5rem"><strong>{{article.date}}</strong></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Axios from 'axios'
export default {
  name: 'article-list',
  data () {
    return {
      content: 'This is article-list component.',
      articles: [
        {
          // 文章的编号
          number: '',
          // 文章的组名
          group: '',
          // 文章的文件名
          name: '',
          // 文章的日期
          date: '',
          // 文章的标签
          tag: ''
        }
      ]
    }
  },
  beforeCreate: function () {
    // 初始化博客文章列表
    Axios.get('config.html').then(response => {
      // 获取以‘---’分割的部分
      let _groups = response.data.split('---')
      for (let index = 0; index < _groups.length; index++) {
        if (_groups[index] === undefined && _groups[index] === '') continue
        let _group = _groups[index].split('\n')
        for (let indexOf = 0; indexOf < _group.length; indexOf++) {
          if (_group[indexOf] === undefined || _group[indexOf] === '') continue
          let itemsOfGroup = _group[indexOf].split('-')
          this.articles.push({
            number: itemsOfGroup[0],
            group: itemsOfGroup[1],
            name: itemsOfGroup[2],
            date: itemsOfGroup[3],
            tag: itemsOfGroup[4]
          })
        }
      }
      // 删除第一个默认的元素
      this.articles.splice(0, 1)
    })
    .catch(response => {
      this.content = '<h1>' + response.statusText + '</h1>'
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
  }
  .ul-style-no {
    align-items: start;
    width: 70vw;
  }
  .ul-style-no li {
    margin: 0;
    width: inherit;
  }
  .ul-style-no li div {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .article-link:hover {
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15);
    border-radius: 8px;
  }
  @media screen and (max-width: 768px){
    .module-container {
      margin-top: 10vh;
    }
    .ul-style-no {
      width: 90vw;
    }
  }
</style>
