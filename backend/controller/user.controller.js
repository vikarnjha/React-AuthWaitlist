import userModel from "../models/user.model.js";
import newsletterModel from "../models/newsletter.model.js";
import { sendEmail } from "../utils/utility.js";

const joinNewsletter = async (req, res) => {
  try {
    console.log(req._id);
    const user = await userModel.findById(req._id);
    console.log(user);
    await sendEmail(
      user.email,
      user.name
    );
    await newsletterModel.create({
      user: user.name,
      email: user.email,
    });
    res.status(200).json({ message: "Successfully joined", success: true });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};
export { joinNewsletter };
