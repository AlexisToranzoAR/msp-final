import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

export default function MyOutlinedInput({
  endAdornment,
  fullWidth,
  id,
  label,
  placeholder,
  onChange,
  onClickIcon,
  size,
  type,
  value,
}) {
  return (
    <FormControl size={size} fullWidth={fullWidth}>
      <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
      <OutlinedInput
        endAdornment={
          endAdornment && (
            <InputAdornment position="end">
              <IconButton onClick={onClickIcon}>{endAdornment}</IconButton>
            </InputAdornment>
          )
        }
        id={id}
        label={label}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        value={value}
      />
    </FormControl>
  );
}
