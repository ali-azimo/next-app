import User from "../models/user.model.js";
import { connect } from "../mongodb/mongoose.js";

export const createOrUpdateUser = async (
    id,
    first_name,
    last_name,
    image_url,
    email_addresses
)=>{
    try {
        await connect();
        const user = await User.findOneAndUpdate(
            { clerkId: id },
            {
               $set:{
                firstName: first_name,
                lastName: last_name,
                profileImage: image_url,
                email: email_addresses[0].email
               }
            },
            { upsert: true, new: true }
        );
        return user;
    } catch (error) {
        console.log('Nao foi possivel criar ou atulizar o usuario', error);
    }
};


//Delete user
export const deleteUser = async (id) => {
    try {
        await connect();
        const user = await User.findOneAndDelete({ clerkId: id });
    } catch (error) {
        console.log('Nao foi possivel deletar o usuario', error);
    }
}