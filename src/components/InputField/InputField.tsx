import React from "react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  helperText,
  errorMessage,
  variant = "outlined",
  size = "md",
  invalid = false,
  disabled = false,
  ...props
}) => {
  const baseClasses =
    "w-full rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";

  const sizeClasses = {
    sm: "px-2 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-4 py-3 text-lg",
  };

  const variantClasses = {
    filled: "bg-gray-100 border-transparent hover:bg-gray-200",
    outlined: "border border-gray-300 bg-transparent hover:border-gray-400",
    ghost: "border-transparent bg-transparent hover:bg-gray-100",
  };

  const stateClasses = `
    ${
      invalid
        ? "border-red-500 focus:ring-red-500 text-red-700"
        : "border-gray-300"
    }
    ${
      disabled
        ? "disabled:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
        : ""
    }
  `;

  const combinedClasses = [
    baseClasses,
    sizeClasses[size],
    variantClasses[variant],
    stateClasses,
  ].join(" ");

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          htmlFor={label}
          className="mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={label}
        className={combinedClasses}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={invalid}
        {...props}
      />
      {invalid && errorMessage ? (
        <p className="mt-1 text-sm text-red-600">{errorMessage}</p>
      ) : helperText ? (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      ) : null}
    </div>
  );
};
