import { Selector, t} from 'testcafe'

class LoginPage {
    constructor(){
        this.form = Selector('#login_form')
        this.title = Selector('h3')
        this.userName = Selector('#user_login')
        this.userPassword = Selector('#user_password')
        this.errorMessage = Selector('.alert-error')
        this.linkToPasswords = Selector('a').withText('Forgot your password ?')
        this.questionSign = Selector('#credentials')
        this.questionSignPopUp = Selector('.tooltip.fade.right.in')
        this.checkboxFld = Selector('#user_remember_me')

    }

    async login(username, password){
        await t
            .typeText(this.userName, 'user')
            .typeText(this.userPassword, 'userpass')
            .pressKey('enter')

    }

    async goToForgottenPassword(){
        await t
            .click(this.linkToPasswords)
    }
}

export default LoginPage
