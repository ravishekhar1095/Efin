module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            // Remove CSS minimizer to avoid gradient parsing issues
            webpackConfig.optimization.minimizer = webpackConfig.optimization.minimizer.filter(
                (plugin) => plugin.constructor.name !== 'CssMinimizerPlugin'
            );
            return webpackConfig;
        },
    },
};
