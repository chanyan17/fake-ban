# fake-ban 

> 模仿豆瓣评分做的H5

#### 项目创建

1. 使用npm全局安装vue脚手架 `vue-cli` (已安装忽略此步)
    * 打开cmd
    * 输入`npm install vue-cli -g`

2. 使用`webpack`模板，新建项目，项目名为`fake-ban`
    * `vue init webpack fake-ban`

3. 进入项目，下载依赖
    * `cd fake-ban`
    * `npm i`

4. 运行开发模式
    * npm run dev

#### 使用vw实现移动端适配 ( [参考资源](https://www.w3cplus.com/mobile/vw-layout-in-vue.html) )
1. `npm install --S`安装PostCSS插件
    ```
    "dependencies": {
        "cssnano": "^3.10.0",
        "postcss-aspect-ratio-mini": "0.0.2",
        "postcss-cssnext": "^3.1.0",
        "postcss-px-to-viewport": "0.0.3",
        "postcss-viewport-units": "^0.1.3",
        "postcss-write-svg": "^3.0.1",
        "vue": "^2.5.2",
        "vue-router": "^3.0.1"
    }
    ```
2. 在`.postcssrc.js`文件对新安装的PostCSS插件进行配置
    ```
    "plugins": {
        "postcss-import": {}, // 默认配置，解决@import引入路径问题
        "postcss-url": {}, // 用来处理文件(图片文件、字体文件)的引用路径
        "postcss-aspect-ratio-mini": {}, // 处理元素容器宽高比
        "postcss-write-svg": { // 处理移动端1px的解决方案
            utf8: false
        },
        "postcss-cssnext": {}, // 使用CSS未来的特性,其会对这些特性做相关的兼容性处理
        "postcss-px-to-viewport": {
            viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
            //viewportHeight: 1334, // 视窗的高度，根据750设备的宽度来指定，一般指定1334
            unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数
            viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ['.ignore', '.hairlines'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
            minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位
            mediaQuery: false // 允许在媒体查询中转换`px`
        },
        "postcss-viewport-units":{}, // 给CSS的属性添加content的属性，配合viewport-units-buggyfill库给vw、vh、vmin和vmax做适配的操作
        "cssnano": { // 压缩和清理CSS代码
            preset: "advanced",
            autoprefixer: false, // 因为重复调用，禁掉
            "postcss-zindex": false // 不让这个插件设置`z-index`的值重置为1
        }
    }
    ```
3. 解决部分安卓机兼容问题
    ```
    <script src="http://g.alicdn.com/fdilab/lib3rd/viewport-units-buggyfill/0.6.2/??viewport-units-buggyfill.hacks.min.js,viewport-units-buggyfill.min.js"></script>
    <script>
        window.onload = function() {
            window.viewportUnitsBuggyfill.init({
                hacks: window.viewportUnitsBuggyfillHacks
            });
            var winDPI = window.devicePixelRatio;
            var uAgent = window.navigator.userAgent;
            var screenHeight = window.screen.height;
            var screenWidth = window.screen.width;
            var winWidth = window.innerWidth;
            var winHeight = window.innerHeight;
            // 获取对应机型相关的参数
            alert(
                'Windows DPI:' + winDPI
                + ';\ruAgent:' + uAgent
                + ';\rScreen Width:' + screenWidth
                + ';\rScreen Height:' + screenHeight
                + ';\rWindow Width:' + winWidth
                + ';\rWindow Height:' + winHeight
            );
        };
    </script>
    ```
#### 添加CSS预处理语言：Less
1. 安装`npm install less less-loader --save-dev`

2. 在`build/webpack.base.conf.js`里配置loader加载依赖
    ```
    modules: {
        rules: [
            // ...其他的loader
            {
                test: /\.less$/,
                loader: "style-loader!css-loader!less-loader",
            }
        ]
    ```
3. 在style标签里加上`lang="less"`里面就可以写less的代码了

#### 引入font-awesome字体图标
1. 安装`npm install font-awesome --save`

2. 在`main.js`引入`import 'font-awesome/css/font-awesome.min.css'`