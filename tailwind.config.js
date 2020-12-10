module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    purge: {
        layers: ['utilities'],
        content: ['./pages/**/*.tsx', './components/**/*.tsx'],
    },
};
