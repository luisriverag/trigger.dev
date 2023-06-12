import { cn } from "~/utils/cn";
import { Button } from "./primitives/Buttons";
import { useCallback, useState } from "react";

const variations = {
  primary: {
    container:
      "flex text-dimmed font-mono rounded border border-slate-800 bg-slate-850 text-xs ring-offset-background transition hover:border-slate-750 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring",
    input: "bg-slate-850 border-0 text-xs px-2 w-auto rounded-l h-6 leading-6",
    buttonVariant: "primary/small" as const,
    button: "rounded-l-none",
  },
  secondary: {
    container:
      "flex text-dimmed font-mono rounded border border-slate-750 bg-slate-850 text-xs ring-offset-background transition hover:border-slate-750 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring",
    input: "bg-slate-850 border-0 text-xs px-2 w-auto rounded-l h-6 leading-6",
    buttonVariant: "secondary/small" as const,
    button: "rounded-l-none border-l border-slate-750",
  },
};

type ClipboardFieldProps = {
  value: string;
  secure?: boolean;
  variant: keyof typeof variations;
  className?: string;
};

export function ClipboardField({
  value,
  secure = false,
  variant,
  className,
}: ClipboardFieldProps) {
  const [isSecure, setIsSecure] = useState(secure);
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    },
    [value]
  );

  const { container, input, buttonVariant, button } = variations[variant];

  return (
    <div className={cn(container, className)}>
      <input
        type="text"
        value={isSecure ? "•".repeat(value.length) : value}
        readOnly={true}
        className={cn("select-all", input)}
        size={value.length}
        onFocus={(e) => {
          if (secure) {
            setIsSecure((i) => false);
          }
          e.currentTarget.select();
        }}
        onBlur={() => {
          if (secure) {
            setIsSecure((i) => true);
          }
        }}
      />
      <Button variant={buttonVariant} onClick={copy} className={button}>
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
}