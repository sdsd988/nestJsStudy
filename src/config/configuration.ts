import * as process from "node:process";

export default () =>({
    ENVIRONMENT: process.env.ENVIRONMENT,
})