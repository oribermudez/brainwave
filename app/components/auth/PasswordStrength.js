"use client"

import { useEffect, useState } from "react";

const PasswordStrength = ({ password, setValidPassword }) => {
  const [minLength, setMinLength] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialCharacter, setHasSpecialCharacter] = useState(false);
  const [hasUppercase, setHasUppercase] = useState(false);

  useEffect(() => {
    setMinLength(password.length > 8);
    setHasNumber(/\d/.test(password));
    setHasSpecialCharacter(/[!@#$%^&*(),.?":{}|<>]/.test(password));
    setHasUppercase(/[A-Z]/.test(password));
    setValidPassword(minLength && hasNumber && hasSpecialCharacter && hasUppercase)
  }, [password]);

  return (
    <>
      {password && (
        <div className="w-full">
          <ul className="list-disc ml-5 text-sm">
            <li className={`${ minLength ? 'text-emerald' : 'text-gray-400'}`}>More than 8 characters</li>
            <li className={`${ hasNumber ? 'text-emerald' : 'text-gray-400'}`}>At least 1 number</li>
            <li className={`${ hasSpecialCharacter ? 'text-emerald' : 'text-gray-400'}`}>At least 1 special character</li>
            <li className={`${ hasUppercase ? 'text-emerald' : 'text-gray-400'}`}>At least 1 capital letter</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default PasswordStrength;
