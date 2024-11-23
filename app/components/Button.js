"use client";
import React from "react";

export default function Button() {
  return (
    <div className="mt-5">
      <button
        className="bg-green-500 rounded-sm px-4 py-1"
        onClick={() => console.log("I have clicked")}
      >
        Click Here
      </button>
    </div>
  );
}
