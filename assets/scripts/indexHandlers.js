document.getElementById("bitcoin-button").addEventListener("click", (e) => {
    e.target.textContent = "Hi!"
})

const divs = document.querySelectorAll("div");

divs.forEach((d, i) => {
    d.addEventListener("click", (e) => {
        updateBitcoinButtonText(i);
    })
})
