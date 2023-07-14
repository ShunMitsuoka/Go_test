"use client";

import { useEffect, useRef, useState } from "react";

export default function Home() {

  const socketRef = useRef<WebSocket>()
  const [isConnected, setIsConnected] = useState(false);

  const [text, setText] = useState<string>('');
  const [recivedText, setRecivedText] = useState<string>('');

  useEffect( () => {
    socketRef.current = new WebSocket('ws://localhost:8000/ws');
    socketRef.current.onopen = function(event) {
      if(!socketRef.current) return;
      setIsConnected(true)
    };
  
    socketRef.current.onmessage = function (msg) {
      console.log(msg);
      setRecivedText(msg.data)
    };

    socketRef.current.onclose = function (msg) {
      setIsConnected(false)
    };
  },[])

  useEffect(() => {
    if(!socketRef.current || !isConnected) return;
    socketRef.current.send([text].join(" "));
  },[text])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {
          isConnected ? 
            <>接続中</> 
            : 
            <>未接続</>
        }
        <div>{recivedText}</div>
        {
          isConnected &&
          <textarea 
            cols={30} 
            rows={10} 
            value={text} 
            onChange={(event) => setText(event.target.value)}
            className=" text-slate-900"
          >

          </textarea>
        }
    </main>
  )
}
