module.exports = {
  'Demo test': function (browser) {
    browser
      .url('https://test.lifeni.life/welcome')
      .waitForElementVisible('body')
      .assert.titleContains('ChatCat')
      //测试注册
      .click('#button-signup')
      .setValue('#input-phone', '13170308108')
      .setValue('#input-password', '@fz123456789')
      .setValue('#input-code', '123456')
      .click('#button-signup');

    //测试登录
    /* .click('#button-login')
        .setValue('#input-phone-1', '15615395617')
        .assert.visible('#input-password')
        .setValue('#input-password', '@Liang123')
        .assert.visible('#login-1')
        .click('#login-1')
        .setValue('#input-captcha', '1234')        //输入验证码
        .assert.visible('#button-send-captcha')
        .click('#button-send-captcha')             //点击“验证”按钮
        .assert.visible('#button-menu')
        .click('#button-menu')                     //点击左上角的菜单栏
        .assert.visible('#nav-profile')
        .click('#nav-profile')                      //进入个人主页
        .assert.visible('#111') */

    // .end();
  },
};
