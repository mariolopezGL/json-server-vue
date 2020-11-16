module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      [
        '@vue/app',
        {
          'modules': false,
          'targets': {
            'browsers': [
              '> 1%',
              'IE 10'
            ]
          },
          'useBuiltIns': 'usage'
        }
      ]
    ]
  };
};
