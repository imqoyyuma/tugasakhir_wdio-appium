describe("Open Application", () => {
    it("Should open apps", async () => {
        const nameField = await $(
            '//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_name"]'
        );
        await nameField.waitForDisplayed({ timeout: 3000 });
        await nameField.click();
        await nameField.setValue("Budi");

        const weightField = await $(
            '//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_weight"]'
        );
        await weightField.click();
        await weightField.setValue("75");

        const heightField = await $(
            '//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_height"]'
        );
        await heightField.click();
        await heightField.setValue("165");

        const genderCheck = await $(
            '//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_male"]'
        );
        await genderCheck.click();

        await driver.hideKeyboard();

        const nextButton = await $(
            '//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]'
        );
        await nextButton.click();

        const selectOption = await $(
            '//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_rest"]'
        );
        await selectOption.click();

        const selesaiButton = await $(
            '//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_finish"]'
        );
        await selesaiButton.click();
    });
});

describe("Home Page Assertion", () => {
    it("Should be on Home Page", async () => {
        const home = await $(
            '//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/tv_header_desc"]'
        );
        const text = await home.getText();
        expect(text).toEqual("Ready to some calories today?");
    });
});
