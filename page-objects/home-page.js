import { Selector, t} from 'testcafe'

class HomePage {
    constructor(){
        this.myMoneyMapTtl = Selector('#money_map_link')
        this.myMoneyMapTxt = Selector('#online_banking_features > div:nth-child(4) > div > p')
        this.transferFundsTtl = Selector('#transfer_funds_link')
        this.transferFundsTxt = Selector('#online_banking_features > div:nth-child(3) > div > p')
        this.checkingAccountTtl = Selector('#account_activity_link')
        this.checkingAccountTxt = Selector('#online_banking_features > div:nth-child(2) > div > p')
        this.onlineBankingTtl = Selector('#online_banking_features > div:nth-child(1) > h4')
        this.onlineBankingTxt = Selector('#online_banking_features > div:nth-child(1) > p')
        this.onlineBankingBtn = Selector('#online-banking')
        this.carouselPic = Selector('#carousel > div > div.item.active > img')
        this.carouselTtl = Selector('#carousel h4')
        this.carouselTxt = Selector('#carousel p')
        this.carouselArrowRght = Selector('#carousel > a.carousel-control.custom.right')
        this.carouselArrowLft = Selector('#carousel > a.carousel-control.custom.left')

        this.footerTxt = Selector('.disclaimer')
        this.footerTxtLnk = Selector('.disclaimer a:nth-child(1)')
        this.downloadWebinspectLnk = Selector('#download_webinspect_link')
        this.termsOfUseLnk = Selector('#terms_of_use_link')
        this.contactHpLnk = Selector('#contact_hp_link')
        this.privacyStatLnk = Selector('#privacy_statement_link')

    }

    async clickOnlineBankingButton(){
        await t.click(this.onlineBankingBtn)
    }
}

export default HomePage