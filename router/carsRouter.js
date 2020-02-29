const router = require('express').Router();

const carsDb = require('../data/dbConfig.js');

//READ ALL

router.get("/", async(req, res, next) => {
    try {
        // translates to `SELECT * FROM accounts;`
        const data = await carsDb.select("*").from("cars")

        res.json(data)
    } catch (err) {
        next(err)
    }
})

//CREATE

router.post("/", async(req, res, next) => {
    try {
        const payload = {
            make: req.body.make,
            model: req.body.model,
            MSRP: req.body.MSRP,
        }

        const [id] = await carsDb("cars").insert(payload)
        const newCar = await carsDb("cars").where("id", id).first()

        res.status(201).json(newCar)
    } catch (err) {
        next(err)
    }
})

//UPDATE

router.put("/:id", async(req, res, next) => {
    try {
        const payload = {
            make: req.body.make,
            model: req.body.model,
            MSRP: req.body.MSRP,
        }

        await carsDb("cars").where("id", req.params.id).update(payload)
        const update = await carsDb("cars").where("id", req.params.id).first()

        res.json(update)
    } catch (err) {
        next(err)
    }
})

//DELETE

router.delete("/:id", async(req, res, next) => {
    try {
        // translates to `DELETE FROM accounts WHERE id = ?`
        // DON'T FORGET THE .WHERE OR YOU MIGHT DELETE YOUR ENTIRE TABLE
        await carsDb("cars").where("id", req.params.id).del()

        res.status(204).end()
    } catch (err) {
        next(err)
    }
})
module.exports = router;