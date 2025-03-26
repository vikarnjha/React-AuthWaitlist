import userModel from "../models/user.model"
import newsletterModel from "../models/waitlist.model"
import { sendEmail } from "../utils/utility"

const joinNewsletter = async (req, res) => {
 const user = await userModel.findById(req._id)
 await sendEmail(user.email, `Hello! ${user.name} `, `Thank you for joining our newsletter!`)
 await newsletterModel.create({
    user: user.name,
    email: user.email
 })

} 
export{joinNewsletter}