
import { NextResponse } from "next/server";
import connectDB from './../../../../db/connectDB';
import Post from "../../../../model/Post";



// GET a single post by ID
export const GET = async (req, { params }) => {
    const { id } = params;
    try {
        // Connect to the database
        await connectDB();


    // Find the post by ID
    const post = await Post.findById(id);

    // If no post is found, return a 404 response
    if (!post) {
        return new NextResponse(
            JSON.stringify({ error: 'Post not found.' }),
            { status: 404 }
        );
    }

    // Return the post as a JSON response
    return new NextResponse(JSON.stringify(post), { status: 200 });
} catch (error) {
    return new NextResponse(
        JSON.stringify({ error: 'An error occurred while processing your request.', error }),
        { status: 500 }
    );
}



}

// post by id
export async function POST(request) {
  try {
    await connectDB();

    const { Content, MediaFile, UserId } = await request.json();

    const newPost = await Post.create({
      Content,
      MediaFile,
      UserId,
    });

    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return new NextResponse("Failed to create post", { status: 500 });
  }
}


// UPDATE a single post by ID
export async function PATCH(req, { params }) {
  try {
    await connectDB();
    const body = await req.json();

    const updatedPost = await Post.findByIdAndUpdate(params.id, body, { new: true });

    if (!updatedPost) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return NextResponse.json(updatedPost);
  } catch (error) {
    console.error("PATCH error:", error);
    return new NextResponse("Error updating post", { status: 500 });
  }
}

// DELETE a single post by ID
export async function DELETE(req, { params }) {
  try {
    await connectDB();

    const deletedPost = await Post.findByIdAndDelete(params.id);

    if (!deletedPost) {
      return new NextResponse("Post not found", { status: 404 });
    }

    return new NextResponse("Post deleted successfully", { status: 200 });
  } catch (error) {
    console.error("DELETE error:", error);
    return new NextResponse("Error deleting post", { status: 500 });
  }
}

