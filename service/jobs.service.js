const Host = require("../module/job.Schema")

exports.hostjobs=async (req,res,next)=>{
   
    const host=new Host({
            position:req.body.position,
            qualification:req.body.qualification,
            minimumEx:req.body.minimum,
            maximumEx:req.body.maximum,
            jobDescription:req.body.jobDescription,
            NatureOfJob:req.body.NatureOfJob,
            userId:req.body.userId,
            companyName:req.body.companyName,
            companyWebsite:req.body.companyWebsite
    })
    var response=await host.save();
    console.log(response)
    res.send({response,message:"successfully Updated"})
}
exports.getusers=async(req,res,)=>{
    const userId=req.params.userId

    
    try{
        const data= await Host.find({userId})
        console.log(data)
        res.send(data)
        }
        catch(err)
        {
            res.send(err)
        }
}
exports.getposts=async(req,res,)=>{
    const userId=req.params.userId

    
    try{
        const data= await Host.find()
        console.log(data)
        res.send(data)
        }
        catch(err)
        {
            res.send(err)
        }
}
exports.deletePost=async(req,res)=>{
    const id=req.params.id 
  
    const response= await Host.findByIdAndDelete(id)
     res.send(response)
}
