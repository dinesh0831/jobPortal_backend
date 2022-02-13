const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
const { findById, findByIdAndUpdate } = require("../module/user.Schema.js");
const Userlist=require("../module/user.Schema.js");
const {registerSchema,logginSchema}=require("../module/user.validation");

module.exports={
    async register(req,res){
        try{
            // validation
            let {error}=await registerSchema.validate(req.body);
            if(error){
            return res.send({message:"*validation failed",error})
            }
            // check the email existing or not
            const user=await Userlist.findOne({email:req.body.email}).exec()
            if (user){
            return res.send({message:"*User already exist"});
            }
            // password bcrypt
            const salt=await bcrypt.genSalt();
            req.body.password=await bcrypt.hash(req.body.password,salt)
            // insert register data
            const users= new Userlist({
                email:req.body.email,
                password:req.body.password,
                name:req.body.name,
                mobileno:req.body.mobileno,                
                location:req.body.address,
                recruiter:req.body.recruiter
                
               
            });
            
            var response=await users.save();
             res.send({response,message:"*successfully registered"})
        }
        catch(error)
        {
            res.sendStatus(500)
        }
    },
    async login(req,res){
        try{
            // validation
            const {error}=await logginSchema.validate(req.body);
            if(error) 
            return res.send({message:"*validation failed"})
          
            
            // email is registered or not
            const user=await Userlist.findOne({email:req.body.email}).exec()
            console.log(user)
            if (!user)   return res.send({message:"*User not exist"})
           
          
            
            // check the password
           const isValid=await bcrypt.compare(req.body.password,user.password)
          if(!isValid)  return res.send({message:"*email and password not matching",});
         
          
           
            // token for access the account
           const token=await jwt.sign({user}, "dinesh@31",{ expiresIn: "8hr" })
           console.log(token)
           

            // respose for logged in
           res.send({message:"*successfully loggedIn",token})
        
        }
        catch(error){
            console.log("Error",error)
            res.sendStatus(500)
        }
    },
    async apply(req,res){
        const data=await Userlist.findById(req.body.user)
        const appliedList=[...data.appliedList]
        appliedList.push(req.body.appliedJob)
        const response =await Userlist.findByIdAndUpdate(req.body.user,{
            appliedList
        })
        const jobHoster=await Userlist.findById(req.body.appliedJob.userId)
        console.log(jobHoster)
        const candidate={
            Name:data.name,
            appliedPosition:req.body.appliedJob.position,
            email:data.email,
            mobileNumber:data.mobileno
        }
        const savedList=[...jobHoster.savedList]
        savedList.push(candidate)
        const applied =await Userlist.findByIdAndUpdate(req.body.appliedJob.userId,{
            savedList
        })
        console.log(response,applied)
        res.send({response,applied})
    },
    async userDatail(req,res){
        const response=await Userlist.findById(req.params.userId)
        res.send(response)

    }

    }
