import Button from "@mui/material/Button";

export default function MyButton({
  color,
  disabled,
  endIcon,
  fullWidth,
  id,
  children,
  onClick,
  size,
  startIcon,
  variant,
  sx,
}) {
  return (
    <Button
      {...{
        color,
        disabled,
        endIcon,
        fullWidth,
        id,
        onClick,
        size,
        startIcon,
        variant,
        sx,
      }}
    >
      {children}
    </Button>
  );
}
