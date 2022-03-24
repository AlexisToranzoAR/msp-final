import { Chip } from "@mui/material";

export default function MyChip ({variant, onDelete, label}) {
    return (
        <Chip label={label} variant={variant} onDelete={onDelete} />
    )
}
