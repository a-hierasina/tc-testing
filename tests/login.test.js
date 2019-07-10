import { Selector } from 'testcafe'
import NavbarPage from '../page-objects/navbar-page'
import LoginPage from '../page-objects/login-page'

const navbarPage = new NavbarPage()
const loginPage = new LoginPage()

fixture `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

test('Should try to login and get error message', async t =>{
    navbarPage.clickSigninButton()
    loginPage.login('alla', 'pass')

    await t.expect(loginPage.errorMessage.innerText).contains('Login and/or password are wrong')
    await t.expect(loginPage.form.exists).ok()
})


