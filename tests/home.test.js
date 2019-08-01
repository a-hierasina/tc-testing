import { Selector } from 'testcafe'
import HomePage from '../page-objects/home-page'
import NavbarPage from '../page-objects/navbar-page'
import { ClientFunction } from 'testcafe';

const homePage = new HomePage()
const navbarPage = new NavbarPage()
const getLocation = ClientFunction(() => document.location.href);
const goBack = ClientFunction(() => window.history.back());

fixture.only `Home page basic tests`
   .page `http://zero.webappsecurity.com/index.html`

test('Nav block check', async t =>{
    await t.expect(navbarPage.logoText.exists).ok()
    await t.click(navbarPage.linkToOnlineBanking)
    await t.expect(getLocation()).contains('online-banking.html')
    await t.click(navbarPage.linkToHome)
    await t.expect(getLocation()).contains('index.html')
    await t.click(navbarPage.linkToFeedback)
    await t.expect(getLocation()).contains('feedback.html')
    await t.click(navbarPage.logoText)
    await t.expect(getLocation()).contains('index.html')
})

test('Carousel block check', async t =>{
    await t.expect(homePage.carouselTtl.innerText).contains('Online Banking')
    await t.expect(homePage.carouselTxt.innerText).contains('Welcome to Zero Online Banking')
    await t.expect(homePage.carouselPic.getAttribute('src')).contains('main_carousel_1.jpg')
    await t.click(homePage.carouselArrowRght)
    await t.expect(homePage.carouselPic.getAttribute('src')).contains('main_carousel_2.jpg')
    await t.click(homePage.carouselArrowLft)
    await t.expect(homePage.carouselPic.getAttribute('src')).contains('main_carousel_1.jpg')
})

test('My money map block check', async t =>{
    await t.expect(homePage.myMoneyMapTxt.innerText).contains('Use Zero to set up and monitor your personalized money map')
    await t.click(homePage.myMoneyMapTtl)
    await t.expect(getLocation()).contains('login.html')
})

test('Transfer funds block check', async t =>{
    await t.expect(homePage.transferFundsTxt.innerText).contains('Use Zero to safely and securely transfer funds between accounts')
    await t.click(homePage.transferFundsTtl)
    await t.expect(getLocation()).contains('login.html')
})

test('Account Activity block check', async t =>{
    await t.expect(homePage.checkingAccountTxt.innerText).contains('Use Zero to view the most up-to-date listings of your deposits')
    await t.click(homePage.checkingAccountTtl)
    await t.expect(getLocation()).contains('login.html')
})

test('Online banking block check', async t =>{
    await t.expect(homePage.onlineBankingTxt.innerText).contains('view online banking features')
    await t.click(homePage.onlineBankingTtl)
    await t.expect(getLocation()).contains('index.html')

    homePage.clickOnlineBankingButton()
    await t.expect(getLocation()).contains('online-banking.html')
})

test('Footer block check', async t =>{
    await t.expect(homePage.footerTxt.innerText).contains('Copyright')
    await t.click(homePage.footerTxtLnk)
    await t.expect(getLocation()).contains('www.microfocus.com/about/legal/#privacy')
})

test('Footer menu check', async t =>{
    await t.click(homePage.downloadWebinspectLnk)
    await t.expect(getLocation()).contains('www.microfocus.com/en-us/products/webinspect-dynamic-analysis-dast/overview')
    await goBack()

    await t.click(homePage.termsOfUseLnk)
    await t.expect(getLocation()).contains('www.microfocus.com/about/legal/')
    await goBack()

    await t.click(homePage.contactHpLnk)
    await t.expect(getLocation()).contains('support.fortify.com/secure/index.jsp')
    await goBack()

    await t.click(homePage.privacyStatLnk)
    await t.expect(getLocation()).contains('www.microfocus.com/about/legal/#privacy')
    await goBack()
})