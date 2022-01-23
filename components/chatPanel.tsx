import { useState, useRef } from "react";
import crypto from "crypto";
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

export interface message {
  content: string;
  from: string;
  to: string;
  fromSelf: boolean;
}
export default function ChatPanel({ socket, selectedUser }: any) {
  const replyRef: any = useRef(null);

  const handleSubmit = (event: any) => {
    {
      event.preventDefault();
      socket.emit("private message", {
        content: replyRef.current.value,
        to: selectedUser.userID,
      });
      // clear reply form input
      replyRef.current.value = "";
    }
  };

  let chat: JSX.Element = <></>;
  let reply: JSX.Element = <></>;

  if (selectedUser && selectedUser.messages) {
    chat = <RenderMessages messages={selectedUser.messages} />;
    reply = <RenderReplyForm handleSubmit={handleSubmit} ref={replyRef} />;

    return (
      <div className="grid grid-rows-6 h-full  w-full">
        <div className="row-span-5 pt-6 pl-5 flex flex-col">
          <PerfectScrollbar>{chat}</PerfectScrollbar>
        </div>
        <div className="row-span-1">{reply}</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col relative justify-center items-center h-full">
      <img className="h-2/5" src="/begin-chat.svg" alt="" />
      <span className="text-gray-800	mt-6">
        open a new window in incognito mode or a new window using a different
        browser, register another user, click on a connected user to start
        messaging
      </span>
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

const RenderReplyForm = React.forwardRef(({ handleSubmit }: any, ref: any) => {
  return (
    <form
      className="justify-self-end justify-center inset-x-0 bottom-0 flex flex-row px-5 gap-4"
      onSubmit={(event) => handleSubmit(event)}
    >
      <textarea
        className="border border-slate-400 focus:outline-blue-600 rounded pt-3 pb-3 pl-6	pr-6 h-full flex-auto w-3/4"
        placeholder="Message"
        ref={ref}
      />
      <button
        className="rounded-full text-white bg-blue-600 flex-auto w-1/4"
        type="submit"
      >
        Send
      </button>
    </form>
  );
});

RenderReplyForm.displayName = "RenderReplyForm";
