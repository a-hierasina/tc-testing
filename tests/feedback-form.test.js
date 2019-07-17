import { Selector } from 'testcafe'
import NavbarPage from '../page-objects/navbar-page'
import FeedbackPage from '../page-objects/feedback-page'
import { ClientFunction } from 'testcafe';

const navbarPage = new NavbarPage()
const feedbackPage = new FeedbackPage()
const getLocation = ClientFunction(() => document.location.href);

fixture `Feedback form test`
    .page `http://zero.webappsecurity.com/index.html`

test('Should display elements on page and link is active', async t =>{
    await t.click(navbarPage.linkToFeedback)
    await t.expect(feedbackPage.feedbackHeader.exists).ok()
    await t.expect(feedbackPage.feedbackDescriptionTxt.innerText).contains('If you can\'t find your question, return to this page')

    await t.click(feedbackPage.feedbackDescriptionLnk)
    await t.expect(getLocation()).contains('faq.html')



})
test('Should clear feedback form', async t =>{
    await t.click(navbarPage.linkToFeedback)
    await t.typeText(feedbackPage.form_name,'Alla')
    await t.typeText(feedbackPage.form_email, 'alla@mail.com')
    await t.typeText(feedbackPage.form_subject, 'subject')
    await t.typeText(feedbackPage.form_comment, 'some comment')
    await t.click(feedbackPage.form_clearButton)

    //Assertions
    await t.expect(feedbackPage.form_name.innerText).eql('')
    await t.expect(feedbackPage.form_email.innerText).eql('')
    await t.expect(feedbackPage.form_subject.innerText).eql('')
    await t.expect(feedbackPage.form_comment.innerText).eql('')

})
test('Should submit feedback form', async t =>{
    await t.click(navbarPage.linkToFeedback)
    await t.typeText(feedbackPage.form_name,'Alla')
    await t.typeText(feedbackPage.form_email, 'alla@mail.com')
    await t.typeText(feedbackPage.form_subject, 'subject')
    await t.typeText(feedbackPage.form_comment, 'some comment')
    await t.click(feedbackPage.form_submitButton)

    //Assertions
    await t.expect(feedbackPage.message.innerText).contains('Thank you for your comments')
})

