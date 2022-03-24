import TextField from "@mui/material/TextField";

export default function MyTextField({
  color,
  disabled,
  formik,
  fullWidth,
  helperText,
  id,
  label,
  maxRows,
  minRows,
  multiline,
  onChange,
  placeholder,
  size,
  style,
  type,
  value,
  variant,
}) {
  return (
    <>
      {formik ? (
        <TextField
          color={color}
          disabled={disabled}
          error={!!formik?.errors[id]}
          fullWidth={fullWidth}
          helperText={helperText}
          id={id}
          label={label}
          maxRows={maxRows}
          minRows={minRows}
          multiline={multiline}
          onChange={formik?.handleChange}
          placeholder={placeholder}
          size={size}
          style={style}
          type={type}
          value={formik?.values[id]}
          variant={variant}
        />
      ) : (
        <TextField
          color={color}
          disabled={disabled}
          fullWidth={fullWidth}
          helperText={helperText}
          id={id}
          label={label}
          maxRows={maxRows}
          minRows={minRows}
          multiline={multiline}
          onChange={onChange}
          placeholder={placeholder}
          size={size}
          style={style}
          type={type}
          value={value}
          variant={variant}
        />
      )}
    </>
  );
}
