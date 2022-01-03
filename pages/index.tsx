import { useRouter } from "next/router";
import { useState } from "react";

export default function Home({ register, socket, isRegistered }: any) {
  const [username, setUsername] = useState("");
  const router = useRouter();
  console.log(isRegistered);
  if (isRegistered) {
    router.push("/inbox");
  }

  return (
    <main className="flex justify-center content-center h-screen">
      <form
        className="m-auto"
        onSubmit={(event) => {
          event.preventDefault();
          register(true);
          socket.auth = { username };
          socket.connect();
        }}
      >
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </main>
  );
}
