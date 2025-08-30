const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  publicPath: './', // importante para GitHub Pages
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new PrerenderSPAPlugin({
            staticDir: path.join(__dirname, 'dist'),
            // Rutas principales que quieres prerenderizar
            routes: ['/', '#/'],
            renderer: new Renderer({
              headless: true,
              renderAfterDocumentEvent: 'render-event'
            })
          })
        ]
      }
    }
  }
};
