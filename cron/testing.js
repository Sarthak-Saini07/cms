import cron from "node-cron";

export const testing = ()=>{
    console.log("Testing function schedule")
    cron.schedule("15 19 * * * *",()=>{
        console.log("test done");
    })
}