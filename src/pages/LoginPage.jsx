import React from 'react';
import { useAuth } from '@clerk/clerk-react';
import { SignInButton, SignUpButton } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isSignedIn) {
      navigate('/dashboard');
    }
  }, [isSignedIn, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>
      <div className="flex space-x-4">
        <SignInButton mode="modal">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Log In</button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</button>
        </SignUpButton>
      </div>
    </div>
  );
};

export default LoginPage;
