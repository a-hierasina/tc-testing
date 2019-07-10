import { Selector, t} from 'testcafe'

class ForgotPasswordPage{
    constructor(){
        this.userEmail = Selector('#user_email')
        this.message = Selector('div')
    }
    async forgotPassword (email){
        await t
            .typeText(this.userEmail, email)
            .pressKey('enter')
    }
}

export default ForgotPasswordPage