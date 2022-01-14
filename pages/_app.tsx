import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import socket from "../lib/socketClient";
import { useRouter } from "next/router";

export interface user {
  username?: string;
  userID?: string;
  messages?: any[];
  hasNewMessages?: boolean;
  self?: boolean;
  connected?: boolean;
  image?: string;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [isRegistered, register] = useState(false);
  const [users, setUsers] = useState(Array<user>());
  const [selectedUser, setSelectedUser] = useState<user>({});
  console.log("whole app rendered");
  const router = useRouter();

  const initReactiveProperties = (user: user) => {
    user.hasNewMessages = false;
    user.image = "https://picsum.photos/200/300";
  };

  const handleAuth = () => {
    const sessionID = localStorage.getItem("sessionID");

    if (sessionID) {
      socket.auth = { sessionID };
      socket.connect();
    }
  };

  useEffect(() => {
    // if a sessionID is already persisted in local storage,
    // use it to authenticate with the server
    handleAuth();

    socket.onAny((event, ...args) => {
      // console.log(event, args);
    });

    socket.on("session", ({ sessionID, userID, username }) => {
      // debugger;
      // attach session ID to the next reconnection attempts
      socket.auth = { sessionID };
      // store it in the localStorage
      localStorage.setItem("sessionID", sessionID);
      // save the ID of the user
      socket.userID = userID;
      socket.username = username;
      register(true);
    });

    socket.on("user connected", (user: user) => {
      initReactiveProperties(user);
      let result = users.filter((usr) => {
        if (usr.userID !== user.userID) {
          return usr;
        }
      });
      setUsers([...result, user]);
    });

    socket.on("users", (activeUsers) => {
      activeUsers.forEach((user: user) => {
        user.messages!.forEach((message: any) => {
          message.fromSelf = message.from === socket.userID;
        });

        user.self = user.userID === socket.userID;
        initReactiveProperties(user);
      });

      // put the current user first, and then sort by username
      let result = activeUsers.sort((a: user, b: user) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username! < b.username!) return -1;
        return a.username! > b.username! ? 1 : 0;
      });

      setUsers(result);
    });

    socket.on("user disconnected", (user: user) => {
      let result = users.map((u: user) => {
        if (u.userID === user.userID) {
          u.connected = false;
          return u;
        }

        return u;
      });
      setUsers(result);
    });

    socket.on("private message", ({ content, from, to }: any) => {
      const result = users.map((user: user) => {
        const fromSelf = socket.userID === from;
        if (user.userID === (fromSelf ? to : from)) {
          user.messages!.push({
            content,
            fromSelf,
          });
          if (user !== selectedUser) {
            user.hasNewMessages = true;
          }
        }

        return user;
      });
      setUsers(result);
    });

    socket.on("connect_error", (err: any) => {
      if (err.message === "Invalid username") {
        localStorage.removeItem("sessionID");
        register(false);
      }
    });

    return () => {
      socket.off("connect_error");
      socket.off("private message");
      socket.off("connect");
      socket.off("user connected");
      socket.off("user disconnected");
      socket.off("session");
    };
  });

  return (
    <Component
      {...{
        ...pageProps,
        socket,
        isRegistered,
        register,
        activeUsers: users,
        selectedUser,
        setSelectedUser,
        setActiveUsers: setUsers,
      }}
    />
  );
}

export default MyApp;
