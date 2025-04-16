"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";

export function FixedPlugin() {
  return (
    <a href="https://wa.me/50378378847?text=Hola%2C%20quisiera%20una%20cotizaci%C3%B3n%20por%20favor" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}      >
        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Impression Apparel Group"
          src="/logos/whatsapp.png"
        />{" "}
        Click to Chat whit us.
      </Button>
    </a>
  );
}
