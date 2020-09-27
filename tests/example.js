module.exports = {
  'Demo test': function (browser) {
    browser
      .url('https://www.baidu.com/')
      .waitForElementVisible('body')
      .assert.titleContains('百度一下，你就知道')
      .assert.visible('#kw')
      .setValue('#kw', 'nightwatch')
      .assert.visible('#su')
      .click('#su')
      .assert.containsText('.result', 'Nightwatch.js')
      .end();
  },
};
