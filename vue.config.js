// const path = require('path');
// const CompressionWebpackPlugin = require("compression-webpack-plugin"); // 开启gzip压缩， 按需引用
// const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i; // 开启gzip压缩， 按需写入
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin; // 打包分析
// const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
// const resolve = (dir) => path.join(__dirname, dir);

module.exports = {
    /**
     * 设置项目的基路径,设置process.env.BASE_URL
     * 例如：http://192.168.43.243:8080  ==>  http://192.168.43.243:8080/test
     * 默认：'/'
     * 注意：使用 publicPath 而不要直接修改 webpack 的 output.publicPath
     */
    publicPath: '/',
    /**
     * vue-cli-service build 时生成的生产环境构建文件的目录
     * 默认：'dist'
     * 默认删除构建目录，--no-clean可消除行为
     * 注意：使用 outputDir 而不要修改 webpack 的 output.path
     */
    outputDir: 'dist',
    /**
     * 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
     * 默认：''
     */
    assetsDir: 'static',
    /**
     * 指定生成的 index.html 的输出路径 (相对于 outputDir)
     * 默认：'index.html'
     */
    // indexPath: 'index.html',
    /**
     * 生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存
     * 例如：true==>app.e2713bb0.css        false==>app.css
     * 默认:true
     */
    filenameHashing: true,
    pages: undefined,
    lintOnSave: false, // 在保存后eslint检查代码。将值设置为'error'是把错误直接输出为编译错误。process.env.NODE_ENV !== 'production'，在生产环境上设为false。
    transpileDependencies: [],
    /**
     * 是否生成.map文件`
     * 默认：true
     * 开发环境设置为false加速开发
     * 发布环境设置为true
     * .map文件作用：项目打包后，代码都是经过压缩加密的，如果运行时报错，输出的错误信息无法准确得知是哪里的代码报错
     */
    productionSourceMap: false,
    /**
     * 设置生成的 HTML 中 <link> 和 <script> 标签的 crossorigin 属性
     * 默认：undefined
     */
    // crossorigin: undefined,
    /**
     * 在生成的 HTML 中的 <link> 和 <script> 标签上启用 Subresource Integrity (SRI)
     * 默认：false
     */
    integrity: true,
    /**
     * 配置webpack(简单配置)
     */
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = '哈哈，测评小练习'
                return args
            })
            // .add('ts')
            // .add('tsx');
    },
    // chainWebpack: (config) => {
    //   // 添加别名
    //   config.resolve.alias
    //     .set('@', resolve('src'))
    //     .set('src', resolve('src'))
    //     .set('common', resolve('src/common'))
    //     .set('components', resolve('src/components'));
    //   // 压缩图片
    //   // 需要 npm i -D image-webpack-loader
    //   config.module
    //     .rule('images')
    //     .use('image-webpack-loader')
    //     .loader('image-webpack-loader')
    //     .options({
    //       mozjpeg: { progressive: true, quality: 65 },
    //       optipng: { enabled: false },
    //       pngquant: { quality: [0.65, 0.9], speed: 4 },
    //       gifsicle: { interlaced: false },
    //       webp: { quality: 75 },
    //     });
    //   // 打包分析, 打包之后自动生成一个名叫report.html文件(可忽视)
    //   if (IS_PROD) {
    //     config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
    //       {
    //         analyzerMode: 'static',
    //       },
    //     ]);
    //   }
    // },
    // configureWebpack: (config) => {
    //   // 开启 gzip 压缩
    //   // 需要 npm i -D compression-webpack-plugin
    //   const plugins = [];
    //   if (IS_PROD) {
    //     plugins.push(
    //       new CompressionWebpackPlugin({
    //         filename: '[path].gz[query]',
    //         algorithm: 'gzip',
    //         test: productionGzipExtensions,
    //         threshold: 10240,
    //         minRatio: 0.8,
    //       })
    //     );
    //   }
    //   config.plugins = [...config.plugins, ...plugins];
    // },
    /**
     * 配置webpack(链式操作)
     */
    /**
     * css配置
     * css.modules:
     * css.extract:
     * css.sourceMap:是否生成css.map文件
     * css.loaderOptions:
     */
    css: {
        requireModuleExtension: false,
        extract: true,
        sourceMap: false,
        loaderOptions: {
            //配置全局scss变量或者mixin....
            sass: {
                // data: `@import "@/global.scss";`
            },
            // 给 less-loader 传递 Less.js 相关选项
            // less: {
            //   // `globalVars` 定义全局对象，可加入全局变量
            //   globalVars: {
            //     primary: '#333',
            //   },
            //   lessOptions: {
            //     modifyVars: {
            //       'primary-color': 'pink',
            //       'link-color': '#pink',
            //       'border-radius-base': '2px',
            //     },
            //     javascriptEnabled: true,
            //   },
            // },
        },
    },
    /**
     * webpack-dev-server配置
     * devServer.proxy:
     */
    devServer: {
        open: false, //配置自动启动浏览器
        hot: false, // 热模块替换，就是热更新页面
        compress: true, // 为所服务的一切启用gzip压缩
        host: '0.0.0.0', // 指定要使用的主机。默认情况下这是localhost。
        port: 65533, // 端口号，
        // 所有 webpack-dev-server 的选项都支持。注意：
        // 有些值像 host、port 和 https 可能会被命令行参数覆写。
        // 有些值像 publicPath 和 historyApiFallback 不应该被修改，因为它们需要和开发服务器的 publicPath 同步以保障正常的工作。
        // proxy:"url地址",// 前端应用和后台API服务没有运行在一个主机上，设置此项在开发环境下代理到API服务器。
        // proxy: 'http://localhost:8080'  // 配置跨域处理,只有一个代理
        //配置多个跨域

        https: false,
        http2: false,
        writeToDisk: false,
        /* refresh pages manually when changes */
        lazy: false,
        watchContentBase: false,
        liveReload: false,
        /* use gzip for static resources */
        disableHostCheck: false,
        /* add response headers */
        headers: {},
        proxy: {
            // 配置不同的后台API地址
            '/api': {
                target: 'https://assess.odmlearning.com/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api' : '',
                },
            },
            // '/foo': {
            //     target: '<other_url>',
            // },
        },
    },
    // parallel:require('os').cpus().length > 1,
    // pwa:{},
    // pluginOptions:{}
};
