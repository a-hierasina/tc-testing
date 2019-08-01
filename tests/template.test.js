import { Selector } from 'testcafe'
import LoginPage from '../page-objects/login-page'

const loginPage = new LoginPage()

fixture.skip `Login Test`
    .page `http://zero.webappsecurity.com/index.html`

test('', async t =>{

})