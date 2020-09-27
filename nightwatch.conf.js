module.exports = {
  // An array of folders (excluding subfolders) where your tests are located;
  // if this is not specified, the test source must be passed as the second argument to the test runner.
  src_folders: ['tests'],
  output_folder: 'reports',
  webdriver: {
    start_process: true,
    port: 7070,
    server_path: require('chromedriver').path,
    log_path: 'logs',
  },

  test_settings: {
    default: {
      launch_url: 'https://test.lifeni.life',
      desiredCapabilities: {
        browserName: 'chrome',
      },
    },
  },
};
