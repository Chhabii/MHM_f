import React, { useState, useEffect, useRef } from "react";
import { Box, TextField, Button, Typography,Paper } from "@mui/material";
import styled from '@emotion/styled';
import TypingIndicator from "../../Components/TypingIndicator/TypingIndicator";
// import './doctorai.css'

const ChatContainer = styled(Box)({
  border: "1px solid lightblue",
  margin: "5px",
  padding: "20px",
  height: "400px",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  // backgroundColor: "black",
  gap: "15px",
  '&::-webkit-scrollbar': {
    width: '10px',
  },
  '&::-webkit-scrollbar-track': {
    background: '#f1f1f1', 
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'lightgreen', 
  },
  '&::-webkit-scrollbar-thumb:hover': {
    background: 'lightgreen', 
  },
});

const MessagePaper = styled(Paper)({
  padding: "10px",
  width: "fit-content"
});

const UserMessage = styled(MessagePaper)({
  alignSelf: "flex-end",
  backgroundColor: "lightblue"
});

const BotMessage = styled(MessagePaper)({
  alignSelf: "flex-start",
  backgroundColor: "lightgreen"
});

const Form = styled('form')({
  display: "flex",
  justifyContent: "center",
  margin: "20px 10px",
  gap: "15px"
});




const DoctorAI = () => {
  const [messages, setMessages] = useState([]);

  const [input, setInput] = useState("");
  const endOfMessages = useRef(null);

  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const fetchResponse = async (message) => {
    const response = await fetch("/apis/doctorai/", {
      method: "POST",
      body: JSON.stringify({
        message: message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages([...messages, { text: input, sender: "user" }]);
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: <TypingIndicator />, sender: "bot" },
    ]);
    const data = await fetchResponse(input);
    setTimeout(() => {
        // Remove "typing..." message and add bot response
        setMessages((prevMessages) => [
            ...prevMessages.slice(0, -1),
            { text: data.message, sender: "bot" },
        ]);
    }, 2000); // delay of 2 seconds
    setInput("");
};
  

  return (
    <Box textAlign="center">
      <ChatContainer>
        {messages.map((message, index) => 
          message.sender === 'user' ? 
            <UserMessage key={index}><Typography variant="body1">{message.text}</Typography></UserMessage> :
            <BotMessage key={index}><Typography variant="body1">{message.text}</Typography></BotMessage>
        )}
        <div ref={endOfMessages} />
      </ChatContainer>
      <Form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"c
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message"
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">Send</Button>
      </Form>
    </Box>
  );
};

export default DoctorAI;
