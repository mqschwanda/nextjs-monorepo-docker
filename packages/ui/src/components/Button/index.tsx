interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({
  children,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type} // eslint-disable-line react/button-has-type
      {...rest} // eslint-disable-line react/jsx-props-no-spreading
    >
      { children }
    </button>
  );
}
