import connectDB from "../../../../db/connectDB";
import User from "../../../../model/User";
import { NextResponse } from "next/server";


// get user information by id
export const GET = async (req, { params }) => {
    const {id} = params
    try {
       await connectDB()

       const user = await User.findById(id).select("-Password-__v");

       if (!user) {
        return new NextResponse(JSON.stringify({ error: "User not found"}), {
            status: 404
        });
       }

       return new NextResponse(JSON.stringify(user), {
        status: 200
       });

        } catch (error) {
            console.error("Error fetching user by ID:", error);
            return new NextResponse(JSON.stringify({ error: "Failed to fetch user"}), {
                status: 500
            });
    }
}


//delete user by their id
export const DELETE = async (req, {params}) => {
    const {id} = params;
    console.log("Deleting user ID:", id);
    try {
        await connectDB();
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return new NextResponse(JSON.stringify({ message: "User not found"}), {
                status: 404
            });
        }
        return new NextResponse(JSON.stringify({ error: "User deleted successfully"}), {
            status: 200
        });
    } catch (error) {
        console.error("Error deleting user by ID:", error);
        return new NextResponse(JSON.stringify({ error: "Failed to delete user"}), {
            status: 500
        });
    }
}


// update  by id 

export const PUT = async (req, {params}) => {
    const {id} = params;
    try {
        await connectDB();
        const userData = await req.json();
        const updatedUser =await User.findByIdAndUpdate(id, userData, {
            new: true,
            runValidators: true
        }).select("-Password-_v");

        if (!updatedUser){
            return new NextResponse(JSON.stringify({error:"user not found"}),{
                status:404
            });
        }
        return new NextResponse(JSON.stringify(updatedUser), {
            status: 200
        });
    } catch (error) {
            console.error("error updating user by ID:", error);
            return new NextResponse(JSON.stringify({error: "user not found"}),{
                status: 500
            });
        }
    }


