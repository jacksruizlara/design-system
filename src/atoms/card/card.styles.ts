import type { SxProps } from "@mui/material";
import type { cardSquared, cardVariant, cardType } from "./card.type";
import Palette from "../../theme/colors/palette";
export const cardContainerSx = (
    cardSquared: cardSquared,
    cardType: cardType
) : SxProps => ({
    border: 1,
    borderColor: Palette[cardType].active,
    borderTop: 5,
    borderTopColor: Palette[cardType].active,
    borderTopLeftRadius: cardSquared === "squared" ? 4 : 5,
    borderTopRightRadius: cardSquared === "squared" ? 4 : 5,
    borderBottomLeftRadius: cardSquared === "squared" ? 0 : 5,
    borderBottomRightRadius: cardSquared === "squared" ? 0 : 5,
});

export const cardDividerSx: SxProps = {
    borderColor: Palette.default.active,
};

export const cardTitleSx = (
    cardVariant:cardVariant,
    cardType: cardType
): SxProps => ({
    paddingX: 2,
    paddingY: 1,
    backgroundColor: cardVariant === "contained" ? Palette[cardType].active : undefined,
    color: cardVariant === "contained" ? Palette[cardType].text?.active : Palette[cardType].active,
    borderRadius: 0,
    fontWeight: "bold"
});

export const cardContentSx: SxProps = {
    paddingX: 2,
    paddingY: 1,
};

export const cardFooterSx: SxProps = {
    paddingX: 2,
    paddingY: 1,
};