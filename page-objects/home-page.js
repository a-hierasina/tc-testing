import { Selector, t} from 'testcafe'

class HomePage {
    constructor(){
        this.myMoneyMapTtl = Selector('#money_map_link')
        this.transferFundsTtl = Selector('#transfer_funds_link')
        this.checkingAccountTtl = Selector('#account_activity_link')
        this.onlineBankingTtl = Selector('#online_banking_features > div:nth-child(1) > h4')
        this.onlineBankingBtn = Selector('#online-banking')
    }

    async clickOnlineBankingButton(){
        await t.click(this.onlineBankingBtn)
    }
}

export default HomePage