import { isIOS, refRatioScale } from '@constants/platform';

export const FONT_SIZE_MEDIUM = 14;
export const FONT_SIZE_LARGE = 16;
export const FONT_SIZE_XLARGE = 20;

export const DEFAULT_BUTTON_WIDTH = isIOS ? refRatioScale(280) : refRatioScale(300);
