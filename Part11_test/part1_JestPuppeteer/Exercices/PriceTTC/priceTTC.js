

const priceTTC = (price, tva = .2) => {

    if ( typeof price === "string" || isNaN(price) === true || isNaN(tva) === true) throw "Price is not a number";

    return Math.floor(price * (1 + tva) * 10) / 10;
}

const priceHT_TTC = (price, tva = .2) => {

    
    if ( typeof price === "string" || isNaN(price) === true || isNaN(tva) === true) throw "Price is not a number";

    return { priceHT: price, priceTTC: Math.floor(price * (1 + tva) * 10) / 10 };
}

module.exports = {
    priceTTC: priceTTC,
    priceHT_TTC: priceHT_TTC
}