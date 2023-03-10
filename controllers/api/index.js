const router = require("express").Router()

const userRoutes = require("./user-routes");
const postRoutes = require("./postRoutes");

router.use("/user", userRoutes)
router.use("/post", postRoutes)

module.exports = router