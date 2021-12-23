import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import socket from "../lib/socketClient";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const [isRegistered, register] = useState(false);
  const [activeUsers, setActiveUsers] = useState(Array);
  const router = useRouter();

  // const initReactiveProperties = (user: any) => {
  //   user.hasNewMessages = false;
  // };

  useEffect(() => {
    socket.on("connect_error", (err: any) => {
      if (err.message === "Invalid username") {
        register(false);
        console.log("Trouble in paradise");
      }
    });

    socket.on("connect", () => {
      register(true);
      router.push("/messageBoard");
    });

    socket.on("user connected", (user) => {
      let users = [...activeUsers, user];
      setActiveUsers(users);
    });

    socket.on("users", (users) => {
      users.forEach((user: any) => {
        user.self = user.userID === socket.id;
        // initReactiveProperties(user);
      });

      // put the current user first, and then sort by username
      users = users.sort((a: any, b: any) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username < b.username) return -1;
        return a.username > b.username ? 1 : 0;
      });

      setActiveUsers(users);
    });

    socket.on("user disconnected", (user: any) => {
      let users = activeUsers.filter((u: any) => u.userID !== user.userID);
      console.log("active users", users);
      setActiveUsers(users);
    });

    return () => {
      socket.off("connect_error");
    };
  });

  return (
    <Component
      {...{ ...pageProps, socket, isRegistered, register, activeUsers }}
    />
  );
}

export default MyApp;
