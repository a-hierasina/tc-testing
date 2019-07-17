import { Selector, t} from 'testcafe'

class FeedbackPage {
    constructor(){
        this.feedbackHeader = Selector('h3')
        this.feedbackDescriptionTxt = Selector('#description p')
        this.feedbackDescriptionLnk = Selector('#faq-link')
        this.form_name = Selector('#name')
        this.form_email = Selector('#email')
        this.form_subject = Selector('#subject')
        this.form_comment = Selector('#comment')
        this.form_submitButton = Selector('input').withAttribute('value', 'Send Message')
        this.form_clearButton = Selector('input').withAttribute('value', 'Clear')
        this.message = Selector('div')
    }
}

export default FeedbackPage