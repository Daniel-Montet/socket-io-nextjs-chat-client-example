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
  isConnected?: boolean;
  image?: string;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [isRegistered, register] = useState(false);
  const [users, setUsers] = useState(Array<user>());
  const [selectedUser, setSelectedUser] = useState<user>({});

  const router = useRouter();

  const initReactiveProperties = (user: user) => {
    user.hasNewMessages = false;
    user.messages = [];
    user.isConnected = true;
    user.image = "https://picsum.photos/200/300";
  };
  // console.log("active users  ", users);

  useEffect(() => {
    socket.on("connect error", (err: any) => {
      if (err.message === "Invalid username") {
        register(false);
        console.log("Trouble in paradise");
      }
    });

    // socket.onAny((event, ...args) => {
    //   console.log(event, args);
    // });

    socket.on("connect", () => {
      register(true);
      router.push("/inbox");
    });

    socket.on("user connected", (user) => {
      initReactiveProperties(user);
      let result = [...users, user];
      setUsers(result);
    });

    socket.on("users", (users) => {
      users.forEach((user: user) => {
        user.self = user.userID === socket.id;
        initReactiveProperties(user);
      });

      // put the current user first, and then sort by username
      users = users.sort((a: user, b: user) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username! < b.username!) return -1;
        return a.username! > b.username! ? 1 : 0;
      });

      setUsers(users);
    });

    socket.on("user disconnected", (user: user) => {
      let result = users.map((u: user) => {
        if (u.userID === user.userID) {
          u.isConnected = false;
          return u;
        }

        return u;
      });
      // console.log("active users", users);
      setUsers(result);
    });

    socket.on("private message", ({ message, from }) => {
      // add message to the sender property
      const result = users.map((user: user) => {
        if (user.userID === from) {
          user.messages!.push({
            message,
            fromSelf: false,
          });
          user.hasNewMessages = true;
        }

        return user;
      });
      // console.log(result);
      setUsers(result);
    });

    return () => {
      socket.off("connect error");
      socket.off("private message");
      socket.off("connect");
      socket.off("user connected");
      socket.off("user disconnected");
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
