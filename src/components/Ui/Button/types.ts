export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
}
