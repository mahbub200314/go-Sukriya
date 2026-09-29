import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "light";
};

export default function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles = variant === "light"
    ? "bg-white text-black hover:bg-gray-100"
    : "bg-primary text-white hover:bg-primary-hover";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-colors ${styles}`}
    >
      {children}
    </Link>
  );
}
