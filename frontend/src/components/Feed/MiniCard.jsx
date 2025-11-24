// src/components/Feed/MiniCard.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Divider,
  Center,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Textarea,
  Avatar,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useSelector } from "react-redux";
import styled from "styled-components";

/**
 * MiniCard components:
 * - MiniCard_Friends: shows user + add friend button
 * - MiniCard_Request: used in Requests list
 * - FriendCard: card with chat modal (replaced socket.io with polling/fetch)
 */

const MiniCard_Friends = ({ userId, friend, addRequestHandler }) => {
  return (
    <Card
      maxW="md"
      mb="1rem"
      borderRadius="lg"
      overflow="hidden"
      boxShadow={"md"}
      p="1rem"
    >
      <Flex
        direction={{ base: "column", sm: "row" }}
        gap="1rem"
        alignItems="center"
      >
        <Avatar size="md" name={friend.name} src={friend.profileImage} />
        <Center height="50px">
          <Divider orientation="vertical" />
        </Center>
        <CardBody flexGrow={1} p={0}>
          <Flex
            mb={2}
            justifyContent="space-between"
            alignItems="center"
            w="100%"
          >
            <Heading size="sm" fontWeight="500">
              {friend.name}
            </Heading>
            {!friend.requests.includes(userId) ? (
              <Button
                variant="outline"
                size="sm"
                colorScheme="primary"
                onClick={() => addRequestHandler(friend._id, friend.requests)}
              >
                Add Friend
              </Button>
            ) : (
              <Button colorScheme="primary" size="sm" disabled>
                Friend Request Sent
              </Button>
            )}
          </Flex>
          <Text noOfLines={2} isTruncated>
            {friend.bio?.slice(0, 40) + "..."}
          </Text>
        </CardBody>
      </Flex>
    </Card>
  );
};

const MiniCard_Request = ({ friend, acceptRequestHandler, rejectRequestHandler }) => {
  return (
    <div>
      <Card maxW="md" px="4px" borderRadius="none" boxShadow="none">
        <Flex justify="space-between" align="center">
          <Avatar size="md" name={friend.name} src={friend.profileImage} />
          <Box flexGrow={1} px={4}>
            <Heading size="sm" textAlign={"left"} fontWeight={"500"}>
              {friend.name}
            </Heading>
          </Box>
          <Flex gap={2} justifyContent="flex-end" alignItems="center">
            <Button
              colorScheme="primary.500"
              size="xs"
              onClick={() => acceptRequestHandler(friend._id)}
            >
              Accept
            </Button>
            <Button
              variant="outline"
              colorScheme="primary"
              size="xs"
              onClick={() => rejectRequestHandler(friend._id)}
            >
              Reject
            </Button>
          </Flex>
        </Flex>
      </Card>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*                          FriendCard (chat modal)                            */
/* -------------------------------------------------------------------------- */

/**
 * Replaces socket.io with:
 * - sendMessage() -> POST to /chat/addmessage
 * - after send, re-fetch messages
 * - polling to refresh messages every 10 seconds to reflect new messages
 */
const FriendCard = ({ friend }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [refreshToggle, setRefreshToggle] = useState(false);
  const user = useSelector((store) => store.authReducer.loggedInUser);
  const token = useSelector((store) => store.authReducer.token) || localStorage.getItem("token");
  const chatContainerRef = useRef();
  const lastMessageRef = useRef();
  const baseUrl = process.env.REACT_APP_API_URL || "";

  const scrollToBottom = () => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fetchChat = async () => {
    try {
      const res = await axios.get(
        `${baseUrl}/chat/getmessage/${user._id}/${friend._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setChat(res.data || []);
    } catch (err) {
      console.error("Failed to fetch chat:", err);
    }
  };

  const sendMessage = async () => {
    if (!message.trim()) return;
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const data = {
      sender: user._id,
      receiver: friend._id,
      message: message,
      time: formattedTime,
    };

    try {
      await axios.post(`${baseUrl}/chat/addmessage`, data, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage("");
      // Immediately re-fetch
      await fetchChat();
      setRefreshToggle((p) => !p);
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  // initial fetch & on refreshToggle
  useEffect(() => {
    if (user && friend) {
      fetchChat();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refreshToggle, user, friend]);

  // scroll to bottom when chat changes
  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  // lightweight polling to get new messages (every 10s)
  useEffect(() => {
    if (!user || !friend) return;
    const interval = setInterval(() => {
      fetchChat();
    }, 10000); // 10s

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, friend]);

  return (
    <div>
      <Card maxW="md" p="1rem" borderRadius="4px" boxShadow="none">
        <Flex justifyContent="space-between" alignItems="center" width="100%">
          <Avatar src={friend.profileImage} mr={"1rem"} />
          <Center height="50px">
            <Divider orientation="vertical" />
          </Center>
          <Flex justifyContent="space-between" alignItems="center" flexGrow={1}>
            <Heading ml="1rem" size="sm" justifySelf="flex-start" fontWeight="500">
              {friend.name}
            </Heading>
            <ChatIcon cursor={"pointer"} onClick={() => { onOpen(); fetchChat(); }} />
          </Flex>
        </Flex>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex width="100%" alignItems={"center"}>
              <Avatar src={friend.profileImage} />
              <Heading ml="20px" size="sm" justifySelf="flex-start">
                {friend.name}
              </Heading>
            </Flex>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CHATBOX>
              <main className="msger-chat" ref={chatContainerRef}>
                {chat.length > 0 ? (
                  chat.map((ele, index) => (
                    <div
                      ref={index === chat.length - 1 ? lastMessageRef : null}
                      className={ele.sender !== user._id ? "msg left-msg" : "msg right-msg"}
                      key={ele._id || index}
                    >
                      <div className="msg-bubble">
                        <div className="msg-info">
                          <div className="msg-info-name">
                            {ele.sender !== user._id ? friend.name : user.name}
                          </div>
                          <div className="msg-info-time">{ele.time}</div>
                        </div>
                        <div className="msg-text">{ele.message}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <Text>No messages yet</Text>
                )}
              </main>
            </CHATBOX>
          </ModalBody>

          <ModalFooter>
            <Flex flexDir={"column"} w="100%">
              <Textarea
                value={message}
                required={true}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your message"
                width="100%"
                mb="1rem"
              />
              <Box textAlign="right">
                <Button onClick={sendMessage} colorScheme="primary">
                  Send message
                </Button>
              </Box>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export { MiniCard_Request, MiniCard_Friends, FriendCard };

/* ----------------------------- styled chat CSS ---------------------------- */

const CHATBOX = styled.div`
  .msger-chat {
    height: 400px;
    overflow-y: scroll;
    padding: 1rem;
  }
  .msg {
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
  }
  .msg-bubble {
    max-width: 450px;
    padding: 12px;
    border-radius: 12px;
    background: #ececec;
  }
  .msg-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6px;
  }
  .left-msg .msg-bubble {
    border-bottom-left-radius: 0;
  }
  .right-msg {
    flex-direction: row-reverse;
  }
  .right-msg .msg-bubble {
    background: #e89c45;
    color: #fff;
    border-bottom-right-radius: 0;
  }
`;
