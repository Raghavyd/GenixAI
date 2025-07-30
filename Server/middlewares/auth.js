import { clerkClient } from "@clerk/express";

//middleware to check userid and haspremiumplan
export const auth =async (req,res,next)=>{
    try {
        const {userId,has} =await req.auth();
        const haspremiumplan=await has({plan:'premium'})
        const user =await clerkClient.users.getUser(userId);

        if(!haspremiumplan && user.privateMetadata.free_usage){
            req.free_usage=user.privateMetadata.free_usage
        }
        else{
            await clerkClient.users.updateUserMetadata(userId,{
                privateMetadata:{
                    free_usage:0
                }
            })
            req.free_usage=0;
        }

        req.plan=haspremiumplan?'premium' : 'free';
        next()
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}