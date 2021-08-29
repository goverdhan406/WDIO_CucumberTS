import { Given, When, Then } from '@cucumber/cucumber';
import chaipage from '../pageobjects/register.page'

Given(/^I am on practice page \"([^\"]*)\"$/, async (apurl:string) =>  {
    await browser.url(apurl)
    await browser.maximizeWindow()

});

Then(/^I validate the page header \"([^\"]*)\"$/, async (practiceform:string) => {
    expect(await chaipage.header).toHaveText(practiceform)
});


When(/^I enter with firstname (.+) and lastname (.+)$/, async  (firstname:string, lastname:string) => {
    await chaipage.fname.setValue(firstname)
    await chaipage.lname.setValue(lastname)
});

When(/^I select gender (.+) years (.+) favourite chai (.+) and reason (.+)$/, async (gender:string, yrs:string, favchai:string, reason:string) =>{

    chaipage.SelectDropDown(await chaipage.gender_rd,gender)
    chaipage.SelectDropDown(await chaipage.exp_rd,yrs)
    chaipage.SelectDropDown(await chaipage.favchai_cb,favchai)
    chaipage.SelectDropDown(await chaipage.reason_cb,reason)
  
});

When(/^I select continent (.+) and commands (.+)$/, async function (continent:string, command:string) {
        await chaipage.ele_continent.selectByVisibleText(continent)
        await chaipage.ele_command.selectByVisibleText(command)
        browser.pause(5000)
});



When(/^I click on Submit button$/, async function ( ) {
        await chaipage.btn_submit.click()
        browser.pause(5000)
  });


