import {Selector} from 'testcafe';

fixture`Getting started with testcafe`
    .page`https://devexpress.github.io/testcafe/example`
    .before(async t => {
        //Test setup goes here
    })
    .beforeEach(async t => {
        //Runs before each test
    })
    .after(async t => {
        //Clean up code goes here
    })
    .afterEach(async t => {
        //Runs after each test
    })
test('First Test', async t => {
    const developerName = Selector('#developer-name')
    const submitButton = Selector('#submit-button')
    const articleHeader = Selector('#article-header').innerText

    await t.setTestSpeed(0.8)
    await t.typeText(developerName, 'Kaniel')
    //await t.takeScreenshot()
    //await t.takeElementScreenshot(submitButton)
    await t.click(submitButton)
    //await t.wait(1000)
    await t.expect(articleHeader).contains('Kaniel')
});
