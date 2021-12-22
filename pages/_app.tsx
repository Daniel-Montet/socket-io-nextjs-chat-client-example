import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import socket from "../lib/socketClient";

function MyApp({ Component, pageProps }: AppProps) {
  const [isRegistered, register] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    socket.on("connect_error", (err: any) => {
      if (err.message === "Invalid username") {
        register(false);
        console.log("Trouble in paradise");
      }
    });

    socket.on("connect", () => {
      register(true);
      console.log("Thou has connected");
    });

    socket.on("users", (users) => {});

    return () => {
      socket.off("connect_error");
    };
  });

  return <Component {...{ ...pageProps, socket, isRegistered, register }} />;
}

export default MyApp;
