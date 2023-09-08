import {Page} from "@playwright/test";

export  async function navigateTo(page: Page, navBarName: string, navBarCategory?: string, navBarOption?: string) {
    await page.getByRole('button', { name: `${navBarName}` }).click();
    await page
        .locator(`#menu-header${navBarName.toLowerCase()}${navBarCategory.toLowerCase()}`)
        .filter({hasText: `${navBarOption}`})
        .getByRole('link', {name: `${navBarOption}`})
        .click()
}
export async function openCard(page: Page, cardTitle: string) {
    await page.getByRole('heading', {name: `${cardTitle}`}).click()
}