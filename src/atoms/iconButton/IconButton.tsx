import { CircularProgress, IconButton as MuiIconButton, type SxProps } from "@mui/material"
import Palette from "../../theme/colors/palette"

const roundStyle = {
  squared: 0,
  rounded: 1.5,
  circle: null
};

const loadingIconSize = {
  small: '1.5rem',
  medium: '1.51rem',
  large: '1.5125rem'
};

export interface IconButtonProps {
  children: React.ReactNode,
  onClick: () => void,
  buttonType?: "default" | "primary" | "success" | "info" | "danger" | "warning",
  size?: "small" | "medium" | "large",
  variant?: "contained" | "outlined",
  rounded?: "squared" | "rounded" | "circle",
  disabled?: boolean,
  loading?: boolean,
}

const IconButton = ({
  children,
  onClick,
  buttonType = "primary",
  size = "medium",
  variant = "contained",
  disabled = false,
  loading = false,
  rounded = "squared"
}: IconButtonProps) => {

  let customStyle: SxProps = {
    borderRadius: roundStyle[rounded],
    backgroundColor: Palette[buttonType as keyof typeof Palette].active,
    color: Palette[buttonType as keyof typeof Palette]?.text?.active,
    '&:hover': {
      backgroundColor: Palette[buttonType as keyof typeof Palette].hover,
      color: Palette[buttonType as keyof typeof Palette]?.text?.hover,
    },
    '&:disabled': {
      backgroundColor: Palette[buttonType as keyof typeof Palette].inactive,
      color: Palette[buttonType as keyof typeof Palette]?.text?.inactive,
    },
  };


  const colorActive = buttonType === "default" ? Palette.default.text?.active : Palette[buttonType as keyof typeof Palette].active;
  const colorHover = buttonType === "default" ? Palette.default.text?.hover : Palette[buttonType as keyof typeof Palette].hover;
  const colorInactive = buttonType === "default" ? Palette.default.text?.inactive : Palette[buttonType as keyof typeof Palette].inactive;
  if (variant === "outlined") {
    customStyle = {
      ...customStyle,
      border: 1,
      backgroundColor: Palette.primary.text!.hover,
      color: colorActive,
      borderColor: colorActive,
      '&:hover': {
        borderColor: colorHover,
        color: colorHover,
      },
      '&:disabled': {
        borderColor: colorInactive,
        color: colorInactive,
      },

    };
  }

  return (
    <MuiIconButton
      onClick={onClick}
      size={size}
      disabled={disabled || loading}
      sx={customStyle}
    >{loading ? (
      <CircularProgress
        size={loadingIconSize[size]}
        sx={{
          color: buttonType === "default" ? Palette.default.text?.inactive : Palette[buttonType as keyof typeof Palette]?.text?.active,
        }}
      />) : children}</MuiIconButton>
  )
}

export default IconButton