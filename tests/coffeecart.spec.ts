import { test, expect, chromium } from "@playwright/test";
import { CoffeeCart } from "../actions/coffeecart";
import { AddMocha } from "../actions/addMocha";
import { AddAmericano } from "../actions/addAmericano";
import { AddEspresso } from "../actions/addEspresso";
import { FreeMocha } from "../actions/addFreeMocha";
import { AddMochaHover } from "../actions/addMochaHover";
import { PaymentDetails } from "../actions/paymentDetails";


test("Add coffee to the cart", async ({page}) => {
    const coffeeCart = new CoffeeCart(page);
    await coffeeCart.coffeeCart();
    const addMocha = new AddMocha(page);
    await addMocha.addMocha();
    const addAmericano = new AddAmericano(page);
    await addAmericano.addAmericano();
    const addMochaHover = new AddMochaHover(page);
    await addMochaHover.addMochaHover();
    const addEspresso = new AddEspresso(page);
    for (let index = 0; index < 3; index++) {
        await addEspresso.addEspresso();  
    }
    const addFreeMocha = new FreeMocha(page);
    await addFreeMocha.clickFreeMochaBtn();
    const paymentPage = new PaymentDetails(page);
    await paymentPage.paymentDetails();
});