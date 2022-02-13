const joi = require("joi")
const schema = {
    registerSchema: joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(8).alphanum().required(),
        mobileno:joi.string().length(10).pattern(/^[0-9]+$/).required(),
        address:joi.string(),
        recruiter:joi.boolean()
    
    }),
    logginSchema: joi.object({
        email: joi.string().email().required(),
        password: joi.string().required()
    })
}
module.exports = schema