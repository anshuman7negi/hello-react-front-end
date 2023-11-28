import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const { message, isLoading, error } = useSelector((store) => store.greetings);

  if (isLoading) {
    return (
      <h1>Loading</h1>
    );
  }
  if (error) {
    return (
      <p>
        Something went wrong!
        {error}
      </p>
    );
  }
  if (message) {
    return (
      <h1>{ message }</h1>
    );
  }
  return <p>No messages found.</p>;
};

export default Greeting;
