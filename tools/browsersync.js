import browserSync from 'browser-sync';

// Run Browsersync and use middleware for Hot Module Replacement
browserSync({
    'files': [
        'build/**/*'
    ],
    'watchOptions': {
        'ignoreInitial': true
    },
    'server': {
        'baseDir': 'build',
    },
    'port': 9000,
    'middleware': [],
    'reloadOnRestart': false,
    'notify': false,
    'open': false
    //'open': 'local',
    //'browser': 'chrome',
});
