import { get } from "lodash";

import layoutStyles from "./customLayout";
import topbarTopPart from "./topbarTopPart";
import topbarLowPart from "./topbarLowPart";
import patientSummaryPanelCore from "./patientSummaryPanel";

import themeStyles from "../../version/styles";

const menu = get(themeStyles, 'menu', {});
const patientSummaryPanel = get(themeStyles, 'patientSummaryPanel', patientSummaryPanelCore);

/**
 * This component returns merges all stylesheets in one total stylesheet for Core
 *
 * @author Bogdan Shcherban <bsc@piogroup.net>
 * @return {shape}
 */
export default {
    layoutStyles,
    topbarTopPart,
    topbarLowPart,
    menu,
    patientSummaryPanel,
};