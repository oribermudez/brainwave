import {
  Input,
  Card,
  Checkbox,
  Button,
  Typography,
} from "./material-tailwind";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  md:bg-login bg-cover bg-white">  
      <Image src="/assets/brand.png" width={340} height={60} alt="logo" className="mb-8"/>    
      <Card color="transparent" shadow={false}>
        <div className="flex flex-start mb-3">
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
            />
            <Input
              variant="standard"
              color="teal"
              label="Last Name"
            />
            <Input
              variant="standard"
              color="teal"
              label="Email"
            />
            <Input
              variant="standard"
              type="password"
              label="Password"
              color="teal"
            />          
          </div>
          <div className="mt-4">
            <Checkbox
              color="teal"
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
       
          <Button className="mt-4 bg-emerald" fullWidth>
            Sign Up
          </Button>

          <div className="flex justify-around items-center py-4">
            <Image src="/assets/divider.png" width={90} height={0.1} alt="Divider"/> 
            <Typography  className="text-center font-normal text-[#8c9096]">
              or
            </Typography>
            <Image src="/assets/divider.png" width={90} height={0.1} alt="Divider"/> 
          </div>
          
          <Button className=" bg-black" fullWidth>
            Sign Up with Github
          </Button>
        </form>
      </Card>
    </main>
  )
}
