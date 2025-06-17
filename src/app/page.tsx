"use client";

import { Button } from "@eintrek/erp-theme";

export default function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Button variant={"default"} size="lg" className="bg-red-500 text-white">
        Click me
      </Button>
    </div>
  );
}
