import { Selector } from 'testcafe'
import HomePage from '../page-objects/home-page'
import { ClientFunction } from 'testcafe';

const homePage = new HomePage()
const getLocation = ClientFunction(() => document.location.href);

fixture.only `Home page basic tests`
   .page `http://zero.webappsecurity.com/index.html`

test('My money map link should redirect to login page', async t =>{
    await t.click(homePage.myMoneyMapTtl)
    await t.expect(getLocation()).contains('login.html')
})

test('Transfer funds link should redirect to login page', async t =>{
    await t.click(homePage.transferFundsTtl)
    await t.expect(getLocation()).contains('login.html')
})

test('Checking Account Activity link should redirect to login page', async t =>{
    await t.click(homePage.checkingAccountTtl)
    await t.expect(getLocation()).contains('login.html')
})

test('Online banking block check', async t =>{
    await t.click(homePage.onlineBankingTtl)
    await t.expect(getLocation()).contains('index.html')

    homePage.clickOnlineBankingButton()
    await t.expect(getLocation()).contains('online-banking.html')
})