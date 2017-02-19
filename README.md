**支持vuejs(version >= 2.0)记住任意滚动元素的滚动位置**  
[![npm](https://img.shields.io/npm/v/vue-keep-scroll-plugin.svg?style=flat-square)](https://www.npmjs.com/package/vue-keep-scroll-plugin)
[![npm](https://img.shields.io/npm/dt/vue-keep-scroll-plugin.svg?style=flat-square)](https://www.npmjs.com/package/vue-keep-scroll-plugin)
[![license](https://img.shields.io/github/license/shmy/vue-keep-scroll-plugin.svg?style=flat-square)](https://github.com/shmy/vue-keep-scroll-plugin/blob/master/LICENSE.md)
[![GitHub stars](https://img.shields.io/github/stars/shmy/vue-keep-scroll-plugin.svg?style=social&label=Star)](https://github.com/shmy/vue-keep-scroll-plugin)  

### **Installation**  
+ via **CDN**  
``` html
  <script src="https://unpkg.com/vue-keep-scroll-plugin/dist/vue-keep-scroll-plugin.min.js"></script>
```  

+ via **NPM**  
```bash
$ npm install vue-keep-scroll-plugin --save # Or
$ yarn add vue-keep-scroll-plugin
```

```javascript
  // main.js
  import Vue from "vue";
  import VueKeepScrollPlugin from "vue-keep-scroll-plugin";
  Vue.use(VueKeepScrollPlugin);   
  
```  
#### Simple example  
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
  <script src="https://unpkg.com/vue-keep-scroll-plugin/dist/vue-keep-scroll-plugin.min.js"></script>
  <style>
    .container {
      height: 500px;
      width: 100%;
      overflow: auto;
    }
  </style>
</head>

<body>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
  <template id="index">
    <div>
      <h1>this is index page</h1>
      <router-link to="/list">go to list</router-link>
      <div v-keep-scroll class="container">
        <p v-for="n of 100">{{ n }}</p>
      </div>
    </div>
  </template>
  <template id="list">
    <div>
      <h1>this is list page</h1>
      <router-link to="/">go to index</router-link>
      <div v-keep-scroll class="container">
        <p v-for="n of 100">{{ n }}</p>
      </div>
    </div>
  </template>
  <script>
    Vue.use(VueRouter);
    Vue.use(vueKeepScrollPlugin);
    var router = new VueRouter({
      routes: [{
        path: "/",
        component: { template: "#index" }
      }, {
        path: "/list",
        component: { template: "#list" }
      }]
    });
    new Vue({
      el: "#app",
      router
    })
  </script>
</body>

</html>
```
