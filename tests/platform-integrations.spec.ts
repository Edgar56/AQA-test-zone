import {expect, test} from "@playwright/test";
import { navigateTo, openCard } from "../utils/helpers";
import { PlatformIntegrationsPage } from "@pages/PlatformIntegrationsPage";


test.describe('Platform Integrations', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/');
        await page.getByRole('button', {name: 'Reject All'}).click();
        await navigateTo(page, 'Solutions', 'Products','Platform integrations')

    })
    test('Should search for Commerce and select values from select list', async({page}) => {
        const platformIntegration = new PlatformIntegrationsPage(page)
        await platformIntegration.fillSearchInput('Commerce');
        await platformIntegration.selectValue('Partner Type', 'eCommerce platform');
        await platformIntegration.selectValue('Industry', 'Digital goods');
        await platformIntegration.selectValue('Location', ['Canada', 'Great Britain']);
        expect(await page.locator('.card').allTextContents()).toHaveLength(4)
    })
    test('Should open third value', async({page}) => {
        await openCard(page,'BIGCOMMERCE');
        expect(await page.getByRole('heading', {name: 'BigCommerce'}).textContent()).toEqual('BigCommerce');
    })
})