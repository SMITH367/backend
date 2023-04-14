const discountFee = (priceOfOrder) => {
    let fee = priceOfOrder * 0.07
    return fee
}


module.exports = discountFee