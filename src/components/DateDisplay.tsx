"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export default function DateDisplay() {
  const date = useSyncExternalStore(
    emptySubscribe,
    () => new Date().toLocaleDateString("bn-BD", { dateStyle: "full" }),
    () => ""
  );

  return <p><small>{date}</small></p>;
}
