import { Given, When, Then } from '@cucumber/cucumber';

Given(/^I am on the login page$/, async () => {
    await browser.url('https://secure-sandbox.modulrfinance.com/')
    await browser.maximizeWindow()
});

When(/^I enter password as \"([^\"]*)\" & Click Sign In button$/, async (password: string) => {
    //const txt_username = $('#username-inp')
    //const txt_password = $('#password-inp')
    await $('#username-inp').setValue('')
    await browser.pause(5000)
    await $('#password-inp').setValue(password)
    await browser.pause(5000)
    const btnSubmit = await $('#signInSubmitButton')
    await btnSubmit.click()
    await browser.pause(5000)
});

Then(/^I should see a flash message under username saying (.+)$/, async (message: string) => {
    const banner = await $('body > app-root > app-signin > div > div > div.full-width.display-flex.align-items-center.justify-content-center > div > form > div:nth-child(2) > app-validated-input > div > app-error-message > div')
    await browser.pause(5000)
    console.log(await banner.getText())
    console.log(message)
    await expect(banner).toHaveText(message)
});

When(/^I enter username as \"([^\"]*)\" & Click Sign In button$/, async (username: string) => {
    //const txt_username = $('#username-inp')
    //const txt_password = $('#password-inp')
    await $('#username-inp').setValue(username)
    await browser.pause(5000)
    await $('#password-inp').setValue('')
    await browser.pause(5000)
    const btnSubmit = await $('#signInSubmitButton')
    await btnSubmit.click()
    await browser.pause(5000)
});

Then(/^I should see a flash message under password saying (.+)$/, async (message: string) => {
    const banner = await $('body > app-root > app-signin > div > div > div.full-width.display-flex.align-items-center.justify-content-center > div > form > div:nth-child(3) > app-validated-input > div > app-error-message > div')
    await browser.pause(5000)
    console.log(await banner.getText())
    console.log(message)
    await expect(banner).toHaveText(message)
});


When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await $('#username-inp').setValue(username)
    await browser.pause(5000)
    await $('#password-inp').setValue(password)
    await browser.pause(5000)
    const btnSubmit = await $('#signInSubmitButton')
    await btnSubmit.click()
    //await browser.pause(5000)
});

Then(/^I should see a flash message saying (.+)$/, async (message1: string) => {
    const banner1 = await $('/html/body/app-root/app-signin/div/div/div[2]/div/form/div[3]')
    await browser.pause(5000)
    console.log(await banner1.getText())
    console.log(message1)
    await expect(banner1).toHaveTextContaining(message1)
    await browser.pause(5000)
    //const banner2 = await $('body > app-root > app-signin > div > div > div.full-width.display-flex.align-items-center.justify-content-center > div > form > div.alert.alert-danger > p')
    //await browser.pause(5000)
    //console.log(await banner2.getText())
    //console.log(message2)
    //await expect(banner2).toHaveText(message2)
});

Then(/^SignIn button must be disabled$/, async () => {
    const btnSubmit = await $('#signInSubmitButton')
    expect(btnSubmit).toBeDisabled()
    await browser.pause(5000)

});

Then(/^login must be successful$/, async () => {
    const homepage = await $('body > app-root > ng-component > div > div.app-layout-teaser.ng-star-inserted > app-sandbox-teaser > div > div.text-body-medium.left-spacing-5.color-white.uppercase-text > p')
    await browser.pause(5000)
    console.log(await homepage.getText())
    await expect(homepage).toHaveText('YOU\'RE IN A TEST ENVIRONMENT')
    await browser.pause(5000)
    const bannerSignout = await $('body > app-root > ng-component > div > div.app-layout-container.display-flex.teased > div.app-layout-main.display-flex.align-items-stretch.flex-direction-column > div.app-layout-main-toolbar > app-toolbar > div > div > div > p > span')
    await bannerSignout.click()
    await browser.pause(5000)
    const signout = await $('body > app-root > ng-component > div > div.app-layout-container.display-flex.teased > div.app-layout-main.display-flex.align-items-stretch.flex-direction-column > div.app-layout-main-toolbar > app-toolbar > div > div > app-profile-popover > div.popover-container.ng-star-inserted > div.bottom-container.text-btn-label-small')
    await signout.click()
    await browser.pause(5000)
});

When(/^I click on Forgotten Password link$/, async () => {
    const linkforgotpwd = await $('#forgotPasswordHref')
    await linkforgotpwd.click()
    await browser.pause(5000) 
});

Then(/^navigate to Reset access page$/, async () => {
    const resetaccess = await $('#signInHeading')
    await browser.pause(5000) 
    await expect(resetaccess).toHaveText('Reset access1')
    
});