const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')
const employeeModel=require('../model/empData');
router.use(express.json());
router.use(express.urlencoded({extended:true}));

//Adding midleware
function verifyToken(req,res,next){
    let token=req.headers.token;
    try {
        if (!token) throw 'Unautherised Access'
        let payload=jwt.verify(token,"secret")
        if (!payload) throw 'Unautherized access'
        next()
    }catch (error) {
        res.json({message:error})
    }
}


router.get('/',verifyToken,async(req,res)=>{
    try {
        const data=await employeeModel.find()
        res.status(200).send(data)
    } catch (error) {
        res.status(404).send('data not found')
    }
})

// router.get('/:id',async(req,res)=>{
//     try {
//         const id=req.params.id;
//         const data=await courseModel.findById()
//         res.status(200).send(data)
//     } catch (error) {
//         res.status(404).send('data not found')
//     }
// })


router.post('/addemployee',verifyToken,async(req,res)=>{
    try {
        var item=req.body;
        const data1=new employeeModel(item)  //for save to db
        const savedata=await data1.save(); //for save to db
        res.status(200).send('post succesful')
    } catch (error) {
        res.status(404).send('post unsucesful')
    }
})
//update operation
router.put('/edit/:id',verifyToken,async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await employeeModel.findByIdAndUpdate(id,req.body)
        res.status(200).send('update successful')

    } catch (error) {
        res.status(404).send('update unsucessful')
    }
})
//delete operation
router.delete('/delete/:id',verifyToken,async(req,res)=>{
    try {
        const id=req.params.id;
        const data=await employeeModel.findByIdAndDelete(id)
        res.status(200).send('delete successful')
    } catch (error) {
        res.status(404).send('delete unsuccessful')
    }
})



module.exports=router;