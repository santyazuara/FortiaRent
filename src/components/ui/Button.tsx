"use client";

import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center rounded-full font-medium text-sm md:text-[0.95rem] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary disabled:opacity-60 disabled:cursor-not-allowed shadow-sm",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-white hover:bg-secondary/90",
        secondary:
          "bg-accent text-[#0F2E3A] hover:bg-white hover:text-[#0F2E3A] font-bold",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
        outlineWhite:
          "border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0F2E3A] font-bold shadow-lg",
        ghost:
          "bg-transparent shadow-none",
      },
      size: {
        md: "px-5 py-2.5",
        lg: "px-7 py-3.5 text-[1rem]",
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

  const motionProps: any = {
    whileHover: { scale: 1.05, opacity: 0.9 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 }
  };

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={classes}
      {...motionProps}
      {...(rest as any)}
    >
      {children}
    </motion.button>
  );
};

export default Button;
