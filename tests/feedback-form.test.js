import { Selector } from 'testcafe'

fixture `Feedback form test`
    .page `http://zero.webappsecurity.com/index.html`

test('Should submit feedback form', async t =>{
    //Get selectors
    const linkToFeedback = Selector('#feedback')
    const form_name = Selector('#name')
    const form_email = Selector('#email')
    const form_subject = Selector('#subject')
    const form_comment = Selector('#comment')
    const form_submitButton = Selector('input').withAttribute('value', 'Send Message')
    const message = Selector('div')
    //Actions
    await t.click(linkToFeedback)
    await t.typeText(form_name,'Alla')
    await t.typeText(form_email, 'alla@mail.com')
    await t.typeText(form_subject, 'subject')
    await t.typeText(form_comment, 'some comment')
    await t.click(form_submitButton)

    //Assertions
    await t.expect(message.innerText).contains('Thank you for your comments')
})