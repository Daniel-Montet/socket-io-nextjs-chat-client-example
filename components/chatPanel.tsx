import { useState } from "react";
import { JsxElement } from "typescript";
import crypto from "crypto";

export interface message {
  content: string;
  from: string;
  to: string;
  fromSelf: boolean;
}
export default function ChatPanel({ socket, selectedUser }: any) {
  const [message, setMessage] = useState("");
  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (event: any) => {
    {
      event.preventDefault();
      socket.emit("private message", {
        content: message,
        to: selectedUser.userID,
      });
    }
  };

  let chat: JSX.Element = <></>;

  if (selectedUser && selectedUser.messages) {
    chat = <RenderMessages messages={selectedUser.messages} />;
  }

  return (
    <div className="pt-6 pl-5 flex flex-col relative">
      {chat}
      <form className="textArea" onSubmit={(event) => handleSubmit(event)}>
        <input type="text" onChange={(event) => handleChange(event)} />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

function RenderMessages({ messages }: any) {
  return (
    <>
      {messages.map((message: message) => {
        if (message.fromSelf) {
          return (
            <div
              key={`${crypto.randomBytes(12)}`}
              className="message-in ml-auto w-2/4 p-2"
            >
              <p className="p-4 max-w-prose  bg-secondary rounded-3xl rounded-tl-none">
                {message.content}
              </p>
            </div>
          );
        }

        return (
          <div
            key={`${crypto.randomBytes(12)}`}
            className="message-in flex gap-4 mb-4"
          >
            <img
              src="https://picsum.photos/200/300"
              alt=""
              className="h-12 w-12 rounded-full"
            />
            <p className="p-4 max-w-prose w-2/4 bg-secondary rounded-3xl rounded-tl-none">
              {message.content}
            </p>
          </div>
        );
      })}
    </>
  );
}
