module.exports = {
  // Replace 'portfolio_website-main' below if your repo name is different
    // GitHub Pages project site config for https://haris-r.github.io/Portfolio
    assetPrefix: process.env.NODE_ENV === 'production' ? '/Portfolio/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/Portfolio' : '',
    images: { unoptimized: true },
};
