import { Button as MuiButton, /*type ButtonProps as MuiButtonProps,*/ styled } from "@mui/material"
import Palette from "../../theme/colors/palette";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const StyledButton = styled(MuiButton)((props: ButtonProps) => {
  const buttonPalette = Palette[props.buttonType as keyof typeof Palette];

  if (props.variant === 'contained') {
    return {
      backgroundColor: buttonPalette?.active,
      color: buttonPalette?.text?.active,
      '&:hover': {
        backgroundColor: buttonPalette?.hover,
        color: buttonPalette?.text?.hover,
      },
      '&:disabled': {
        backgroundColor: buttonPalette?.inactive,
        color: buttonPalette?.text?.inactive,
      },
    };
  }

  if(props.buttonType==="default"){
    return {
    borderColor: buttonPalette?.text?.active,
    color: buttonPalette?.text?.active,
    '&:hover': {
      borderColor: buttonPalette?.text?.hover,
      color: buttonPalette?.text?.hover,
    },
    '&:disabled': {
      borderColor: buttonPalette?.text?.inactive,
      color: buttonPalette?.text?.inactive,
    },
  };
  }

  return {
    borderColor: buttonPalette?.active,
    color: buttonPalette?.active,
    '&:hover': {
      borderColor: buttonPalette?.hover,
      color: buttonPalette?.hover,
    },
    '&:disabled': {
      borderColor: buttonPalette?.inactive,
      color: buttonPalette?.inactive,
    },
  };
});

export interface ButtonProps {
  children: React.ReactNode,
  onClick: () => void,
  buttonType?: "default" | "primary" | "success" | "info" | "danger" | "warning",
  variant?: "contained" | "outlined",
  size?: "small" | "medium" | "large",
  disabled?: boolean,
  showStartIcon?: boolean,
  startIcon?: React.ReactNode,
  showEndIcon?: boolean,
  endIcon?: React.ReactNode,
  loading?: boolean,
  loadingPosition?: "start" | "end" | "center",
  fullWidth?: boolean,
}

const Button = ({
  children,
  onClick,
  buttonType = "default",
  variant = "contained",
  size = "medium",
  disabled = false,
  showStartIcon = false,
  startIcon = (<ChevronRightIcon />),
  showEndIcon = false,
  endIcon = (<ChevronLeftIcon />),
  loading = false,
  loadingPosition = "center",
  fullWidth = false
}: ButtonProps) => {
  return (
    <StyledButton
      buttonType={buttonType}
      onClick={onClick}
      variant={variant}
      size={size}
      disabled={disabled}
      startIcon={showStartIcon && startIcon}
      endIcon={showEndIcon && endIcon}
      loading={loading}
      loadingPosition={loadingPosition}
      fullWidth={fullWidth}
    >{children}</StyledButton>
  )
}

export default Button