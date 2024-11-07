import React, { useState } from 'react';
import { Text, Input, Button } from "../../components";

const WaitingListPage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://g84c60a1e52e6e4-ora23aidb.adb.eu-paris-1.oraclecloudapps.com/ords/api/ee_do_service/this_action", {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          procedure: "JOIN_WAITLIST",
          payload: {
            email: email
          }
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setError('');
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md space-y-8 rounded-xl bg-white p-8 shadow-lg">
        <div className="text-center">
          <Text 
            className="text-3xl font-bold text-gray-900"
            size="heading3xl"
          >
            Join the Waiting List
          </Text>
          <Text className="mt-4 text-gray-600">
            Be the first to know when we launch our sustainability reporting platform.
          </Text>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3"
              />
              {error && (
                <Text className="mt-2 text-sm text-red-600">
                  {error}
                </Text>
              )}
            </div>
            <Button
              type="submit"
              className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700"
            >
              Join Waiting List
            </Button>
          </form>
        ) : (
          <div className="mt-8 text-center">
            <div className="mb-4 rounded-full bg-green-100 p-2 inline-block">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <Text className="text-xl font-medium text-gray-900">
              Thank you for joining!
            </Text>
            <Text className="mt-2 text-gray-600">
              We'll notify you when we launch.
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitingListPage;
