import { getCurrentThemeColor } from "../../../core/config/styles";

const themeColor = getCurrentThemeColor(false);

/**
 * This component returns styles for User Tour
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {shape}
 */
export default {
    options: {
        beaconSize: 36,
        overlayColor: 'rgba(0, 0, 0, 0.5)',
        primaryColor: '#f04',
        spotlightShadow: 'none',
        textColor: '#333',
        width: 400,
        zIndex: 999999,
    },
    tooltipTitle: {
        textAlign: "left",
        color: themeColor,
        paddingTop: "10px",
        paddingLeft: "10px",
    },
    tooltipContent: {
        textAlign: "left",
    },
    buttonClose: {
        display: "none",
    },
    buttonSkip: {
        color: themeColor,
        fontSize: "16px",
        fontWeight: "600"
    },
    buttonBack: {
        color: themeColor,
        fontSize: "16px",
        fontWeight: "600"
    },
    buttonLast: {
        border: "2px solid " + themeColor,
        borderRadius: "25px",
        backgroundColor: "#fff",
        padding: "12px 18px",
        color: themeColor,
        fontSize: "16px",
        fontWeight: "600",
    },
    buttonNext: {
        border: "2px solid " + themeColor,
        borderRadius: "25px",
        backgroundColor: "#fff",
        padding: "12px 18px",
        color: themeColor,
        fontSize: "16px",
        fontWeight: "600",
    },
};