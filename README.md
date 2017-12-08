# Blog
vue-cli+express+mongodb

1. import router from './router' 这里注意命名，一开始命名routes，发现会报错，改成router就可以
2. view-router ()[https://router.vuejs.org/zh-cn/essentials/nested-routes.html]
3. 在server.js文件里引入了router.js文件,router.js里接口api里，查看发送的请求数据也有，返回也有，但是无法通过req.body获取到请求数据。
    ```
        app.use(express.static(path.resolve(__dirname, '../dist')));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        //注意这个顺序，应该先在前面对req进行解析，再引入router，因为解析是对router文件进行的
        app.use(router);
    ```
    
4. 304缓存加时间戳'&t=' + (new Date()).getTime().toString()
5. https://segmentfault.com/a/1190000008010666 看vue生命周期
6. 登录注册，session确定是否过期
7. 子组件与父组件动态传值