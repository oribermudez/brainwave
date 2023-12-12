import { connectToDatabase } from "../../mongodb";
import bcrypt from 'bcrypt';

export const dynamic = 'force-dynamic'; // defaults to auto

export async function POST(request) {
  try {
    const body = await request.json();

    // Connect to the MongoDB database
    const { db } = await connectToDatabase();

    // Destructure user data from the request body
    const { email, password } = body;

    // Check if the email exists in the database
    const existingUser = await db.collection('users').findOne({ email });

    if (!existingUser) {
      return new Response(JSON.stringify({ error: 'User not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (!passwordMatch) {
      return new Response(JSON.stringify({ error: 'Invalid password' }), {
        status: 401,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    return new Response(JSON.stringify({ message: 'Login successful' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
