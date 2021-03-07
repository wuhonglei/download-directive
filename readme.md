## 介绍
该模块是 vue 指令模块，用于下载文件

## 安装
```bash
npm i download-directive --save
```

## 使用
1. 全局安装 
```js
import downloadDirective from 'download-directive';
Vue.use(downloadDirective);
```

2. 局部安装
```js
<template lang="">
  <div>
        <button
        v-download="['http://127.0.0.1:59165/skeleton1.zip', 'http://127.0.0.1:59165/skeleton2.zip']"
    >下载</button>
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

## 使用
```html
<div v-download="'url'">下载单个文件</div>
<div v-download="['url1', 'url2']">下载多个文件</div>
```