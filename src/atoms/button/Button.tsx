import { Button as MuiButton, type SxProps} from "@mui/material"
import type React from "react"

export interface ButtonProps {
    children: React.ReactNode,
    onClick: () => void,
    disabled?: boolean,
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
    fullWidth?: boolean,
    loading?: boolean,
    loadingPosition?: "start" | "center" | "end",
    variant?: "contained" | "outlined" | "text",
    size?: "small" | "medium" | "large",
    sx?: SxProps
}

const Button = ({
    onClick,
    disabled = false,
    startIcon,
    endIcon,
    fullWidth=false,
    loading=false,
    loadingPosition="center",
    variant="contained",
    size="medium",
    sx,
    children,
}: ButtonProps) => {
  return (
    <MuiButton
        onClick={onClick}
        disabled={disabled}
        startIcon={startIcon}
        endIcon={endIcon}
        fullWidth={fullWidth}
        loading={loading}
        loadingPosition={loadingPosition}
        variant={variant}
        size={size}
        sx={sx}
    >{children}</MuiButton>
  )
}

export default Button