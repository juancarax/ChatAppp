import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.styles.css";

import { motion } from "framer-motion";

const Message = ({ children, username, message }) => {
  const isUser = username === message.username;
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <motion.div
      animate="visible"
      initial="hidden"
      variants={variants}
      transition={{ duration: 0.5 }}
      className={`message ${isUser && "message__user"}`}
    >
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username} says: `} {children}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Message;
