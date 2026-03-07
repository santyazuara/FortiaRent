"use client";

import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import React from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-full font-medium text-sm md:text-[0.95rem] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-60 disabled:cursor-not-allowed px-5 py-2.5",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-secondary/90 shadow-sm",
        secondary:
          "bg-accent text-[#0F2E3A] hover:bg-white hover:text-[#0F2E3A] shadow-sm font-bold",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white transition-all",
        outlineWhite:
          "border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F2E3A] font-bold shadow-lg transition-all",
      },
      size: {
        md: "px-5 py-2.5",
        lg: "px-6 py-3 text-[0.97rem]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    href?: string;
  };

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  className,
  href,
  ...rest
}) => {
  const classes = clsx(buttonStyles({ variant, size }), className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;

