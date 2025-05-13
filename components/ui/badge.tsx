import type * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "border-none text-[var(--light-green-50)] inline-flex items-center justify-center rounded-md border px-2.5 py-[3px] text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-4 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        warning: "badge-bold bg-[var(--warning)] rounded-[6px]",
        isDday: "badge-bold bg-[var(--light-green-300)] rounded-[6px]",
        review: "badge-sm bg-[var(--light-green-300)] rounded-[6px]",
        done: "badge-bold bg-zinc-400 rounded-[6px]",
        location: "badge-medium bg-zinc-600 rounded-[15px]",
        share: "badge-medium bg-[var(--secondary)] rounded-[15px]",
        cart: "badge-medium bg-[var(--orange)] rounded-[15px]",
        locate: "badge-bold bg-[var(--white-o5)] text-zinc-900 rounded-[15px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants, type VariantProps };
