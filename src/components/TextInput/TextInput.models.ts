export interface TextInputProps {
  name: string
  value: string
  label: string
  setValue: (value: string) => void
  isPassword?: boolean
  error: string
}

export interface InputProps {
  error: string
}