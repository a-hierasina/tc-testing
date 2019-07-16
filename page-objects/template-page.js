import { Selector, t} from 'testcafe'

class LoginPage {
    constructor(){
        this.form = Selector('#login_form')

    }

    async functionname(){
        await t
            .click(this.linkToPasswords)
    }
}

export default LoginPage