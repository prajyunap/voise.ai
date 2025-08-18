"use client";
import { useState } from "react";

export default function VoiseWidget() {
  const [active, setActive] = useState(false);

  return (
    <button
      onClick={() => setActive(!active)}
      className={`px-6 py-3 rounded-full font-semibold ${active ? "bg-red-500 text-white" : "bg-brand text-white"}`}
    >
      {active ? "End Call" : "Talk to Voise"}
    </button>
  );
}