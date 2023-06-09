const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test('can display choices div', async () => {
    await driver.get("https://localhost:8000")
    await driver.wait(until.titleIs("Duel Duo"), 1000)
    await driver.findElement(By.name("draw")).click()
    await driver.findElement(By.name("choices"))
  })

  test('can display player-duo div', async () => {
    await driver.get("https://localhost:8000")
    await driver.wait(until.titleIs("Duel Duo"), 1000)
    await driver.findElement(By.name("draw")).click()
    await driver.findElement(By.name("bot-btn")).click()
    await driver.findElement(By.name("player-duo"))
  })
});