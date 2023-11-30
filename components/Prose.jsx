import clsx from "clsx";
import React from "react";

export function Prose({ children, className }) {
  return (
    <div className={clsx(className, "prose dark:prose-invert")}>{children}</div>
  );
}
