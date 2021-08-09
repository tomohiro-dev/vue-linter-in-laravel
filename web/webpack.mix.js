const mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

if (!mix.inProduction()) {
  mix.webpackConfig({
    module: {
      rules: [
        {
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'eslint-loader',
          test: /\.(js|vue)?$/
        }
      ]
    }
  })
}
// ※Eslintの設定：本番環境ではESLintを使わない

// mix
//   .js("resources/js/app.js", "public/js")
//   .sass("resources/sass/app.scss", "public/css");
// sassの設定参照用にコメントアウト

mix
  .browserSync({
    proxy: '0.0.0.0:8081',
    open: false //browserを自動で開かない設定
  })
  .js('resources/js/app.js', 'public/js')
  .version()
