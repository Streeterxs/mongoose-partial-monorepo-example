module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript'
    ],
    plugins: [
        '@babel/plugin-transform-modules-commonjs',
        // https://github.com/parcel-bundler/parcel/issues/871#issuecomment-370135105
        // https://github.com/babel/babel-loader/issues/560#issuecomment-370180866
        '@babel/plugin-transform-runtime'
    ]
}
