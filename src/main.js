import * as el from "./elements.js";
import { openBiscuit, toggleScreen } from "./functions.js";

el.openBiscuitBtn.addEventListener("click", openBiscuit);
el.resetBtn.addEventListener("click", toggleScreen);