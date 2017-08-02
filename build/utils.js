var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var existsSync = require('fs').existsSync
exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}
  let theme = getTheme()
  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less',{modifyVars: theme}),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

/**
 * get theme from package.json
 * @return {Object} theme
 * */
function getTheme () {
  const pkgPath = path.join(__dirname, '..', 'package.json')
  const pkg = existsSync(pkgPath) ? require(pkgPath) : {}
  let theme = {}
  if (pkg.theme) {
    // for the type of './theme.js'
    if (isString(pkg.theme)) {
      let cfgPath = pkg.theme
      // relative path
      if (cfgPath.charAt(0) === '.') {
        cfgPath = path.join(__dirname, '..', cfgPath)
      }

      try{
        const getThemeConfig = require(cfgPath)

        if (getThemeConfig) {
          if (isObject(getThemeConfig)) {
            theme = getThemeConfig
          }
          if (isFunction(getThemeConfig)) {
            theme = getThemeConfig() || {}
          }
        }
      }catch (err){
        console.error(`${err.message} with input position of '${pkg.theme}' at 'package.json' file.`)
      }
    }
    // for the type of '{"primary-color":"#1DA57A"}'
    if (isObject(pkg.theme)) {
      theme = pkg.theme
    }
  }

  return theme
}

function isString (val) {
  return typeof val === 'string'
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isFunction (val) {
  return typeof val === 'function'
}
