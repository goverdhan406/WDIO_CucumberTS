import Page from "./page";

class chaipage extends Page {
    get header() { return $('#wsb-element-00000000-0000-0000-0000-000452032346 > div > h1') }
    get fname() { return $('#wsb-element-00000000-0000-0000-0000-000452032346 > div > form > fieldset > div:nth-child(4) > p:nth-child(2) > input[type=text]') }
    get lname() { return $('#wsb-element-00000000-0000-0000-0000-000452032346 > div > form > fieldset > div:nth-child(4) > p:nth-child(3) > input[type=text]') }
    get gender_rd() { return $$('[name=sex]') }
    get exp_rd() { return $$('[name=exp]') }
    get favchai_cb() { return $$('input[name*=Tea]') }
    get reason_cb() { return $$('[name=tool]') }
    get ele_continent() { return $('#continents') }
    get ele_command() { return $('#selenium_commands') }
    get btn_submit() { return $('#submit') }

    async SelectDropDown(element:WebdriverIO.ElementArray, value: string)  {
    for (let i = 0; i <= element.length; i++) {
        const ele = await (element[i]).getAttribute('value')
        if (ele === value) {
            await (element[i]).click()
            break;
        }

    }

}

}
export default new chaipage()