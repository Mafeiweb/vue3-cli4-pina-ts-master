### 项目介绍
经常需要构建新项目时，每次安装都非常繁琐。有时由于依赖配置的升级，项目搭建时会遇到各种问题。然而在市场上找到的解决方案要么过时，要么不符合我对UI组件库的要求。此外很多解决方案都是基于Vite构建的，而我一直更喜欢使用CLI脚手架。

因此，我花了些时间整理了一套较新的模板，旨在简化项目搭建过程。这套模板相对纯净，没有集成任何大型UI库，但可以根据个人需求进行灵活集成和使用。我决定将其开放给有需要的同行，并非常欢迎各位提供宝贵的改进意见。

##### 环境依赖
node >14.*

##### 项目重要结构集成介绍
* vue3
* cli4 (vue-cli3版本， 升级命令npm update -g @vue/cli)
* typescript
* axios 接口封装
* pinia 数据状态管理
* js-cookie 用于令牌或者重要数据存储
* eslint 语法检查
* prettier 自动格式化
* less css语法规范
* postcss-pxtorem H5自动适配（已注释，如果是h5项目，放开就行）

##### 扩展功能
> 为了简化项目的搭建流程，我将常用功能直接集成到模板中。如果您不需要其中某些功能，您可以在安装依赖前直接删除package.json文件中对应的依赖项，然后执行安装命令。
* svg svg图标展示，支持动态更换颜色（重要）
* swiper 轮播图（可选,使用参考：https://swiperjs.com/get-started） 
* v-viewer 大图查看器（可选，使用参考：https://mirari.cc/vue3-viewer/）
* vue-clipboard3 文本复制（可选）
* vue-cropper 图片裁剪（可选，使用参考：https://github.com/xyxiao001/vue-cropper）
* vue-toastification taost 组件（可选，项目store中已经集成，更多使用参考：https://github.com/Maronato/vue-toastification）

##### 其他功能
* svg 预览复制，方便查找图片（已配置测试及生产环境屏蔽，可放心使用）
* 多环境配置 （开发、测试、生产）
* 完整的接口封装功能（支持模块化拆分）


##### 依赖安装命令
```
yarn || yarn install || npm install
```

##### 项目运行命令
```
yarn dev || npm run dev //开发环境
yarn uat || npm run uat //测试环境
yarn prod || npm run prod //生产环境
```

##### 项目构建打包命令
```
yarn dev:build || npm run dev:build //开发环境
yarn uat:build || npm run uat:build //测试环境
yarn build || npm run build //生产环境
```

##### 代码自动格式化校验命令
```
yarn lint
```

##### 目录结构

```
vue3-cli4-pina-ts
├─ .env.development
├─ .env.production
├─ .env.uat
├─ .eslintrc.js
├─ README.en.md
├─ README.md
├─ babel.config.js
├─ package.json
├─ postcss.config.js
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ icons
│  │  │  ├─ index.ts
│  │  │  └─ svg
│  │  │     ├─ baocun.svg
│  │  │     ├─ bianji.svg
│  │  │     ├─ booleanbeifen.svg
│  │  │     ├─ fenxiang.svg
│  │  │     ├─ fuzhijiahao.svg
│  │  │     ├─ guanbi.svg
│  │  │     ├─ jiahao.svg
│  │  │     ├─ jiantoushang.svg
│  │  │     ├─ jiantouyou.svg
│  │  │     └─ jiantouzuo.svg
│  │  └─ image
│  ├─ components
│  │  ├─ GlobalHeader
│  │  │  └─ index.vue
│  │  └─ SvgIcon
│  │     └─ index.vue
│  ├─ main.ts
│  ├─ router
│  │  ├─ index.ts
│  │  └─ router.ts
│  ├─ server
│  │  ├─ api.ts
│  │  ├─ index.ts
│  │  └─ modules
│  │     └─ home.ts
│  ├─ shims-vue.d.ts
│  ├─ store
│  │  ├─ index.ts
│  │  └─ modules
│  │     └─ user.ts
│  ├─ style
│  │  └─ index.less
│  └─ views
│     ├─ Detail
│     │  └─ detail.vue
│     ├─ Index
│     │  └─ index.vue
│     ├─ Login
│     │  ├─ login.less
│     │  └─ login.vue
│     └─ SvgPreview
│        └─ SvgPreview.vue
├─ tsconfig.json
├─ vue.config.js
└─ yarn.lock

```