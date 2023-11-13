"use client"

import { useState } from "react";
import {
  Input,
  Card,
  Button,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

const SignIn = () => {
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);
  
    // try {
    //   const response = await fetch('endpoint-url', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(userData),
    //   });
  
    //   if (response.ok) {
    //     const data = await response.json();
    //     // Handle the API response as needed.
    //     console.log('API response:', data);
    //   } else {
    //     // Handle the API error response.
    //     console.error('API error:', response.status, response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Error sending data:', error);
    // }
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center md:bg-login bg-cover bg-white">  
      <Image src="/assets/brand.png" width={330} height={64} alt="logo" className="mb-8" priority />    
      <Card color="transparent" shadow={false}>
        <div className="flex justify-center mb-6">
          <Typography variant="h5" className="text-royal border-2 border-transparent border-b-emerald pb-1">
            Sign In
          </Typography>
        </div>
        <Typography className="mt-1 font-normal text-[#8c9096] text-sm">
          Welcome back! Enter your credentials to sign in.
        </Typography>
        <form className="mt-4 w-80 max-w-screen-lg sm:w-96 lg:w-[320px]">
          <div className="mb-8 flex flex-col items-center gap-4">
            <Input
              variant="standard"
              color="teal"
              label="Email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            <Input
              variant="standard"
              type="password"
              label="Password"
              color="teal"
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
            /> 
          </div>
       
          <Button type="submit" className="mt-4 bg-emerald !capitalize text-sm !font-semibold" fullWidth onClick={handleSubmit}>
            Sign In
          </Button>

          <div className="flex justify-around items-center py-4">
            <Image src="/assets/divider.png" width={90} height={1} alt="Divider"/> 
            <Typography  className="text-center font-normal text-[#8c9096]">
              or
            </Typography>
            <Image src="/assets/divider.png" width={90} height={1} alt="Divider"/> 
          </div>
          
          <Button className="bg-black !capitalize text-sm !font-semibold" fullWidth>
            Sign In with Github
          </Button>
        </form>
      </Card>
    </main>
  )
}

export default SignIn;
