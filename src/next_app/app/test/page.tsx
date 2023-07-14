"use client";

import Image from 'next/image'
import { useEffect } from 'react';
import { io } from 'socket.io-client';

export default function Home() {

  const socket = new WebSocket('ws://localhost:8000/ws')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        aaaa
    </main>
  )
}
