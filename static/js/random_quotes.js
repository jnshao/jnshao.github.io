function setQuote(el, quote) {
    el.innerText = quote;
}

async function getRandomQuote() {
    const resp = await fetch('data/data.json');
    const json = await resp.json();
    const quotes = json.quotes || [];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

async function setRandomQuote() {
    const quote = await getRandomQuote();
    let el = document.getElementById('quote');

    if (el === null) {
        // element is not found
        return;
    }
    setQuote(el, quote);
}

setRandomQuote().then();
