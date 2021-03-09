## 介绍
该模块是 vue 指令模块，用于下载文件

## 一、模块内安装 & 使用

```bash
npm i download-directive --save
```

1. 全局注册 
```js
import downloadDirective from 'download-directive';
Vue.use(downloadDirective);
```

2. 局部注册
```js
<template lang="">
  <div>
        <button v-download="'./test_file.txt'">下载单文件</button>
        <button v-download="['./test_file2.txt']">下载单文件</button>
        <button v-download="['./test_file.txt', './test_file2.txt']">下载多文件</button>
  </div>
</template>

<script>
import { download } from 'download-directive';
export default {
	directives: {
		download: download
	}
}
</script>
```

## 一、浏览器直接安装 & 使用

```html
<div id="app">
    <button v-download="'./test_file.txt'">下载单文件</button>
    <button v-download="['./test_file2.txt']">下载单文件</button>
    <button v-download="['./test_file.txt', './test_file2.txt']">下载多文件</button>
</div>
<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.9/vue.js"></script>
<script src="../dist/bundle.umd.js"></script>
<script>
    Vue.use(downloadDirective.default);

    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    });
</script>
```