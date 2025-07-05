const{test,expect}=require("@playwright/test");


test.beforeEach("login page",async({page})=>{
    await page.goto("https://saucedemo.com/")
    await page.locator(".login_logo").isVisible();
    await expect(page.locator(".login_logo")).toBeVisible();
    //console.log("login logo visibility assertion is passed")
})

test("test1:standard_user_login",async({page})=>{
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    console.log("Login succefull with standar_user");
});

test("test2:problem_user_login",async({page})=>{
    await page.getByPlaceholder("Username").fill("problem_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    console.log("Login succefull with problem_user");
});

test("test3:performance_glitch_user_login",async({page})=>{
    await page.getByPlaceholder("Username").fill("performance_glitch_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    console.log("Login succefull with performance_glitch_user");
});

test("test4:error_user_login",async({page})=>{
    await page.getByPlaceholder("Username").fill("error_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    console.log("Login succefull with error_user");
});

test("test5:visual_user_login",async({page})=>{
    await page.getByPlaceholder("Username").fill("visual_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    console.log("Login succefull with visual_user");
});

test("test6:locked_out_user_login",async({page})=>{
     await page.getByPlaceholder("Username").fill("locked_out_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page.locator("h3")).toHaveText("Epic sadface: Sorry, this user has been locked out.");
    console.log("Login failed with locked_out_user and error message is visible");
});

test("test7:valid username & invalid password login",async({page})=>{
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("password");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page.locator("h3")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    console.log("Login failed and error message is visible");
});

test("test8:invalid username & valid password login",async({page})=>{
    await page.getByPlaceholder("Username").fill("wrong_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page.locator("h3")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    console.log("Login failed and error message is visible");
});

test("test9:non-existent username & valid password login",async({page})=>{
    await page.getByPlaceholder("Username").fill("user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page.locator("h3")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    console.log("Login failed and error message is visible");
});

test("test10:valid username & numeric password login",async({page})=>{
    await page.getByPlaceholder("Username").fill("standar_user");
    await page.getByPlaceholder("Password").fill("12345");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page.locator("h3")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    console.log("Login failed and error message is visible");
});

test("test11:space only password login",async({page})=>{
    await page.getByPlaceholder("Username").fill("standar_user");
    await page.getByPlaceholder("Password").fill(" ");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page.locator("h3")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    console.log("Login failed and error message is visible");
});

test("test12:space only username login",async({page})=>{
    await page.getByPlaceholder("Username").fill(" ");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page.locator("h3")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    console.log("Login failed and error message is visible");
});

test("test13:empty username login",async({page})=>{
    await page.getByPlaceholder("Username").fill("");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page.locator("h3")).toHaveText("Epic sadface: Username is required");
    console.log("Login failed and error message is visible");
});

test("test14:empty password login",async({page})=>{
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page.locator("h3")).toHaveText("Epic sadface: Password is required");
    console.log("Login failed and error message is visible");
});

test("test15:empty username and password login",async({page})=>{
    await page.getByPlaceholder("Username").fill("");
    await page.getByPlaceholder("Password").fill("");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page.locator("h3")).toHaveText("Epic sadface: Username is required");
    console.log("Login failed and error message is visible");
});


test("test16:whitespace in username and password login",async({page})=>{
    await page.getByPlaceholder("Username").fill("  ");
    await page.getByPlaceholder("Password").fill("  ");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page.locator("h3")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    console.log("Login failed and error message is visible");
});

test("test17:login as guest",async({page})=>{
    await page.getByPlaceholder("Username").fill("guest");
    await page.getByPlaceholder("Password").fill("guest123");
    await page.getByRole("button",{name:'login'}).click();
    await expect(page.locator("h3")).toHaveText("Epic sadface: Username and password do not match any user in this service");
    console.log("Login failed and error message is visible");
});