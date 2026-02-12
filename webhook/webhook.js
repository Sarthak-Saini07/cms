import express from "express";

const router = express.Router();

router.post("/test",(req,res)=>{
    console.log("git webhook recieved");
    console.log(req.body);
    res.status(200).json({recieved: true});

    res.json({recived: true});
});
export default router;