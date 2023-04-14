const express = require('express')
const router = express.Router()
const deliveryMan = require('../models/deliveryMan')
const database = require("../database/database")



router.put('/deliveryMan/set/balance/:id', async (req, res) => {

    let data = true

    const newData = {
        balance: req.body.balance
    }

    if (data === true) {
        try {
            const updateUser = await deliveryMan.updateOne({
                email: req.params.id
            }, newData)
            res.send(updateUser.acknowledged)
        } catch (err) {
            res.sendStatus(403)
        }

    }

})

module.exports = router