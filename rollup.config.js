import babel from 'rollup-plugin-babel';


export default {
    input: 'src/index.js',
    output: {
        file: 'dist/elements-by-class-name-observer.js',
        format: 'iife',
        name: 'elementsByClassNameObserver'
    },
    plugins: [
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            presets: [
                ["@babel/preset-env", { modules: false }]
            ],
            comments: false
        })
    ]
};
