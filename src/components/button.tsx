import { forwardRef, ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  as?: React.ElementType;
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef(
  (
    { onClick, href, children, as = "button", disabled = false }: ButtonProps,
    ref
  ) => {
    const Element = as;
    return (
      <Element
        href={href}
        onClick={onClick}
        ref={ref}
        className={clsx(
          "block rounded-[4px] bg-[#6A778A] py-3 px-6 text-base font-medium text-white",
          {
            "opacity-30": disabled,
          }
        )}
        disabled={disabled}
      >
        {children}
      </Element>
    );
  }
);

Button.displayName = "Button";
