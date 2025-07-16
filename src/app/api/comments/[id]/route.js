
import connectDB from './../../../../db/connectDB';
import Comment from "../../../../model/Comment";
import Post from "../../../../model/Post";
import { NextResponse } from "next/server";
import User from "../../../../model/user";



// get all comments of post
export const GET = async (req, { params }) => {
  const { id } = params;
  try {
    // Connect to the database
    await connectDB();

    // Find the post by ID
    const comments = await Comment.find({PostId: id}).sort({createdAt: -1}).populate('UserId', 'Name ProfileImage');

    // If no post is found, return a 404 response
    if (!comments) {
      return new NextResponse(
        JSON.stringify({ error: 'no comments found for this post.' }),
        { status: 404 }
      );
    }

    // Return the comments of the post as a JSON response
    return new NextResponse(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: 'failed to fetch comments.' }),
      { status: 500 }
    );
  }
};



// PATCH: Update a comment by ID
export async function PATCH(request, { params }) {
  try {
    await connectDB();

    const commentId = params.id;
    const body = await request.json();

    const updated = await Comment.findByIdAndUpdate(
      commentId,
      { $set: body },
      { new: true }
    );

    if (!updated) {
      return new NextResponse('Comment not found', { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error('PATCH /api/comments/[id] error:', error);
    return new NextResponse('Server Error', { status: 500 });
  }
}

// DELETE: Delete a comment by ID
export async function DELETE(request, { params }) {
  try {
    await connectDB();

    const commentId = params.id;

    const deleted = await Comment.findByIdAndDelete(commentId);

    if (!deleted) {
      return new NextResponse('Comment not found', { status: 404 });
    }

    return new NextResponse('Comment deleted', { status: 200 });
  } catch (error) {
    console.error('DELETE /api/comments/[id] error:', error);
    return new NextResponse('Server Error', { status: 500 });
  }
}