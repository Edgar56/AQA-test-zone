import {Locator, Page} from "@playwright/test";

export  class PlatformIntegrationsPage {
    readonly page: Page;
    readonly searchInput: Locator;
    readonly selectListOptions: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchInput = page.getByRole('textbox');
        this.selectListOptions = page.locator('ul > li');
    }

    async fillSearchInput(text: string) {
        await this.searchInput.type(text);
    }
    async selectValue(selectListName: string, optionsList: string | string[]) {
        await this.page.getByRole('combobox', { name: `${selectListName}` }).click();

        if (Array.isArray(optionsList)) {
            for (const value of optionsList) {
                await this.selectListOptions
                    .getByRole('option', { name: `${value}` })
                    .click();
            }
        } else {
            await this.selectListOptions
                .getByRole('option', { name: `${optionsList}` })
                .click();
        }
    }

}