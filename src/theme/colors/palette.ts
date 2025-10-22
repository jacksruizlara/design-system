import type { PaletteType } from "../types/PaletteType";
import { Cian, DarkGray, Green, LightCian, LightGray, Red, White, Yellow } from "./base";

// Webtool: https://m2.material.io/inline-tools/color/
const Palette: PaletteType = {
  default: {
    inactive: LightGray.inactive,
    active: LightGray.active,
    hover: LightGray.hover,
    text: {
      inactive: DarkGray.inactive,
      active: DarkGray.active,
      hover: DarkGray.hover,
    },
  },
  primary: {
    inactive: Cian.inactive,
    active: Cian.active,
    hover: Cian.hover,
    text: {
      inactive: White.inactive,
      active: White.active,
      hover: White.hover
    }
  },
  info: {
    inactive: LightCian.inactive,
    active: LightCian.active,
    hover: LightCian.hover,
    text: {
      inactive: White.inactive,
      active: White.active,
      hover: White.hover
    }
  },
  success: {
    inactive: Green.inactive,
    active: Green.active,
    hover: Green.hover,
    text: {
      inactive: White.inactive,
      active: White.active,
      hover: White.hover
    }
  },
  warning: {
    inactive: Yellow.inactive,
    active: Yellow.active,
    hover: Yellow.hover,
    text: {
      inactive: White.inactive,
      active: White.active,
      hover: White.hover
    }
  },
  danger: {
    inactive: Red.inactive,
    active: Red.active,
    hover: Red.hover,
    text: {
      inactive: White.inactive,
      active: White.active,
      hover: White.hover
    }
  }
};

export default Palette;
