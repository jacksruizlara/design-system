export type ItemType = {
  inactive: string,
  active: string,
  hover: string
};

export type PaletteItemType = ItemType & {
  text?: ItemType;
};


export type PaletteType = {
  default: PaletteItemType;
  primary: PaletteItemType;
  info: PaletteItemType;
  success: PaletteItemType;
  warning: PaletteItemType;
  danger: PaletteItemType;
};
