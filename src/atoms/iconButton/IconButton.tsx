import { IconButton as MuiIconButton, type SxProps } from "@mui/material"

export interface IconButtonProps {
  children: React.ReactNode,
  disabled?: boolean,
  loading?: boolean,
  size?: "small" | "medium" | "large",
  sx?: SxProps
}

const IconButton = ({
    children,
    disabled=false,
    loading=false,
    size="medium",
    sx,
}:IconButtonProps) => {
  return (
    <MuiIconButton
        disabled={disabled}
        loading={loading}
        size={size}
        sx={sx}
    >{children}</MuiIconButton>
  )
}

export default IconButton