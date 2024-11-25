import user from "./user.js"
import category from "./category.js"
import express from "express"


const app = express()

app.use("/user", user)
app.use("/category", category)

export default app