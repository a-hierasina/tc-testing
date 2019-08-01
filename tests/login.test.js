import { Selector } from 'testcafe'
import NavbarPage from '../page-objects/navbar-page'
import LoginPage from '../page-objects/login-page'

const navbarPage = new NavbarPage()
const loginPage = new LoginPage()

fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

test('Should try to login and get error message', async t =>{
    navbarPage.clickSigninButton()
    await t.hover(loginPage.questionSign)
    await t.expect(loginPage.questionSignPopUp.innerText).eql('Login/Password - username/password')
    await t.expect(loginPage.title.innerText).contains('Log in to ZeroBank')
    loginPage.login('alla', 'pass')


    await t.expect(loginPage.errorMessage.innerText).contains('Login and/or password are wrong')
    await t.expect(loginPage.title.innerText).contains('Troubles entering the site?')
    await t.expect(loginPage.form.exists).ok()
})

test('Click a check box and check its state', async t => {
    navbarPage.clickSigninButton()
    await t.click(loginPage.checkboxFld)
    await t.expect(loginPage.checkboxFld.checked).ok()
})


