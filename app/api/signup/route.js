import { connectToDatabase } from "../../mongodb";
import bcrypt from 'bcrypt';

export const dynamic = 'force-dynamic'; // defaults to auto

export async function POST(request) {
  try {

    const body = await request.json();
    
    // Connect to the MongoDB database
    const { db } = await connectToDatabase();

    // Destructure user data from the request body
    const { firstName, lastName, email, password } = body;

    // Check if the email already exists
    const existingUser = await db.collection('users').findOne({ email });

    if (existingUser) {
      return new Response(JSON.stringify({ error: 'User already exists' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user document
    const newUser = {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    };

    // Insert the new user into the database
    await db.collection('users').insertOne(newUser);

    return new Response(JSON.stringify({ message: 'User created successfully' }), {
      status: 201,
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
