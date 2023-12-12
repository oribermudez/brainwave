"use client"

import { useEffect, useState } from "react";
import {
  Input,
  Card,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import PasswordStrength from "@/app/components/auth/PasswordStrength";
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/navigation';
import Link from "next/link";

const SignUp = () => {
  const router = useRouter(); 
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [validated, setValidated] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    program: 'JavaScript',
    achievements: [],
  });

  const validateForm = () => {
    const noEmptyFields = Object.values(userData).every((value) => value !== '');
    return noEmptyFields && agreeToTerms && validPassword;
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userData);

    if (!validated) {
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('API response:', data);
        router.push('/');
      } else {
        console.error('API error:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  useEffect(() => {
    setValidated(validateForm());
  }, [userData, agreeToTerms, validPassword, validateForm]);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  md:bg-login bg-cover bg-white">  
      <Image src="/assets/brand.png" width={330} height={64} alt="logo" className="mb-8" priority />    
      <Card color="transparent" shadow={false}>
        <div className="flex justify-center mb-5">
          <Typography variant="h5" className="text-royal border-2 border-transparent border-b-emerald pb-1">
            Sign Up
          </Typography>
        </div>
        <Typography className="mt-1 font-normal text-[#8c9096] text-sm">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96 lg:w-[320px]">
          <div className="mb-1 flex flex-col items-center gap-4">
            <Input
              variant="standard"
              label="First Name"
              color="teal"
              value={userData.firstName}
              onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
            />
            <Input
              variant="standard"
              color="teal"
              label="Last Name"
              value={userData.lastName}
              onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
            />
            <Input
              variant="standard"
              color="teal"
              label="Email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
            />
            <Input
              variant="standard"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              color="teal"
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              icon={
                <button type="button" className={`${ userData.password ? 'block' : 'hidden'}`} onClick={handleShowPassword}>
                  {showPassword ? <EyeOffIcon className="h-5 w-5 text-emerald" /> : <EyeIcon className="h-5 w-5 text-emerald" />}
                </button>
              }
            /> 
            <PasswordStrength password={userData.password} setValidPassword={setValidPassword}/>
          </div>
          <div className="mt-4">
            <Checkbox
              color="teal"
              checked={agreeToTerms}
              onChange={(e) =>
                setAgreeToTerms(e.target.checked)
              }
              label={
                <Typography
                  variant="small"
                  className="flex items-center font-normal text-[#8c9096]"
                >
                  I agree the Terms and Conditions
                </Typography>
              }
            />
          </div>
          <Button type="submit" className={`mt-4 ${ validated ? 'bg-emerald' : 'bg-gray-400' } !capitalize text-sm !font-semibold`} fullWidth onClick={handleSubmit} >
            Sign Up
          </Button>
          <div className="text-center text-xs font-normal text-gray-400 mt-8">
            Already have an account? 
            <Link href="/login" className="text-emerald ml-1">
              Sign In
            </Link>
          </div>
          {/* <div className="flex justify-around items-center py-4">
            <Image src="/assets/divider.png" width={90} height={1} alt="Divider"/> 
            <Typography  className="text-center font-normal text-[#8c9096]">
              or
            </Typography>
            <Image src="/assets/divider.png" width={90} height={1} alt="Divider"/> 
          </div>
          <Button className="bg-black !capitalize text-sm !font-semibold" fullWidth>
            Sign Up with Github
          </Button> */}
        </form>
      </Card>
    </main>
  )
}

export default SignUp;
