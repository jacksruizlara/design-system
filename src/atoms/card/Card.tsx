import { Divider, Paper } from "@mui/material"
import { elevation, type cardShadow, type cardSquared, type cardType, type cardVariant } from "./card.type";
import { cardContainerSx, cardContentSx, cardDividerSx, cardFooterSx, cardTitleSx } from "./card.styles";

export interface CardProps {
    children: React.ReactNode,
    variant: cardVariant,
    shadow: cardShadow,
    squared?: cardSquared,
    type?: cardType,
    showCardTitle?: boolean,
    cardTitle?: React.ReactNode,
    showCardFooter?: boolean,
    cardFooter?: React.ReactNode,
}

const Card = ({
    children,
    variant = "contained",
    shadow = "normal",
    squared = "rounded",
    type = "primary",
    showCardTitle = true,
    cardTitle,
    showCardFooter = true,
    cardFooter,
}: CardProps) => {

    return (
        <Paper
            elevation={elevation[shadow]}
            sx={cardContainerSx(squared, type)}
        >
            {showCardTitle && (
                <>
                    <Paper
                        elevation={0}
                        sx={cardTitleSx(variant, type)}>
                        {cardTitle}
                    </Paper>
                    <Divider sx={cardDividerSx} />
                </>
            )}
            <Paper
                elevation={0}
                sx={cardContentSx}
            >{children}</Paper>
            {showCardFooter && (
                <>
                    <Divider sx={cardDividerSx} />
                    <Paper
                        elevation={0}
                        sx={cardFooterSx}
                    >
                        {cardFooter}
                    </Paper>
                </>
            )}
        </Paper>
    )
}

export default Card