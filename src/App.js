import React, { useState, useEffect } from "react";
import { FormControl, Input } from "@material-ui/core";
import db from "./firebaseutils/firebase.utils";
import Message from "./components/Message/Message";
import firebase from "firebase";
import { AnimateSharedLayout, motion } from "framer-motion";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";

import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please, enter your name"));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <h1>Chat App, made using Firebase!</h1>
      <h1>Type something, {username || "Unknown"}! </h1>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message.. "
            onChange={(event) => setInput(event.target.value)}
          />

          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            size="medium"
            disableElevation
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <AnimateSharedLayout>
        <motion.div layout>
          {messages.map(({ id, message }) => (
            <Message key={id} message={message} username={username}>
              {message.message}
            </Message>
          ))}
        </motion.div>
      </AnimateSharedLayout>
    </div>
  );
}

export default App;
