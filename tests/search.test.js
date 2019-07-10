import { Selector } from 'testcafe'
import NavbarPage from '../page-objects/navbar-page'
import SearchResultsPage from '../page-objects/searchresults-page'

const navbarPage = new NavbarPage()
const searchResultsPage = new SearchResultsPage()

fixture `Search test`
    .page `http://zero.webappsecurity.com/index.html`

test('Search should work', async t =>{
    navbarPage.search('online bank')

    //Assertions
    await t.expect(searchResultsPage.title.exists).ok()
    await t.expect(searchResultsPage.message.innerText).contains('Zero - Free Access to Online Banking')
})