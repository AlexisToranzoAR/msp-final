import { Checkbox, FormControlLabel } from "@mui/material";

export default function MyCheckbox({
  checked,
  color,
  disabled,
  label,
  onChange,
  size,
}) {
  return (
    <FormControlLabel
      checked={checked}
      color={color}
      control={<Checkbox defaultChecked />}
      disabled={disabled}
      label={label}
      onChange={onChange}
      size={size}
    />
  );
}
