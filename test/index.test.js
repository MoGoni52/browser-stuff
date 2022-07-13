/**
* @jest-environment jsdom
*/

const { updateBitcoinButtonText } = require("../assets/scripts/index");

describe("updateBitcoinButtonText", () => {

    beforeEach(() => {
        document.documentElement.innerHTML = "<button id='bitcoin-button'></button>";
    })

        test("It updates the button display when clicked", () => {
            updateBitcoinButtonText("test");
            const button = document.querySelector("#bitcoin-button");

            expect(button.textContent).toEqual("test");
        })
    })

