import { Selector } from 'testcafe'
import NavbarPage from '../page-objects/navbar-page'
import LoginPage from '../page-objects/login-page'
import ForgotPasswordPage from '../page-objects/forgotpassword-page'

const navbarPage = new NavbarPage()
const loginPage = new LoginPage()
const forgotPasswordPage = new ForgotPasswordPage()

fixture `Send forgotten password test`
    .page `http://zero.webappsecurity.com/index.html`

test('Should send new password', async t=>{
    navbarPage.clickSigninButton()
    loginPage.goToForgottenPassword()
    forgotPasswordPage.forgotPassword('alla@mail.com')

    await t.expect(forgotPasswordPage.message.innerText).contains('Your password will be sent to the following email')
    await t.expect(forgotPasswordPage.userEmail.exists).notOk()
    })