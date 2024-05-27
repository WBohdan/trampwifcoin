import { ButtonHTMLAttributes, InputHTMLAttributes, ReactNode } from "react";

// Button
export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  disabled?: boolean;
  icon?: ReactNode;
  className?: string;
  loading?: boolean;
  onClick?: () => void;
}

// Textfield
export interface ITextfieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  textfieldClassName?: string;
  label?: string;
  placeholder?: string;
  error?: string | boolean;
  countChars?: number;
  isPassword?: boolean;
  isTextarea?: boolean;
}
