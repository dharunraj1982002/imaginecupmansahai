import React from 'react';
import ChatBot from 'react-simple-chatbot';

const ChatPage = () => {
  const steps = [
    {
      id: '1',
      message: 'What is your name?',
      trigger: '2',
    },
    {
      id: '2',
      user: true,
      trigger: '3',
    },
    {
      id: '3',
      message: 'Hi {previousValue}, nice to meet you!',
      end: true,
    },
  ];

  return (
    <div className="chatbot">
      <ChatBot steps={steps} />
    </div>
  );
};

export default ChatPage;
