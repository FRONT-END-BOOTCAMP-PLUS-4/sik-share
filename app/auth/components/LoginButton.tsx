interface LoginButtonProps {
  name: string;
}

export default function LoginButton({ name }: LoginButtonProps) {
  return <button type="button">{name}</button>;
}
