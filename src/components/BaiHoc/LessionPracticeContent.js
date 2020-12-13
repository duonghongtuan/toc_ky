import { Icon } from "@iconify/react";
import bxLeftArrowAlt from "@iconify/icons-bx/bx-left-arrow-alt";
import bxRightArrowAlt from "@iconify/icons-bx/bx-right-arrow-alt";
import StenoKeyboard from "../keyboard/steno-keyboard/StenoKeyboard";
import Hands from "../keyboard/Hands";
import StenoInput from "../keyboard/StenoInput";
import QwertyStenoKeyboad from "../keyboard/qwerty-steno-keyboard/QwertyStenoKeyboard";

function LessionPracticeContent(props) {
    const { hidePracticeContent } = props;
    const pressedKeys = new Set();

    const handleKeyDown = (event) => {
        const { key } = event;
        pressedKeys.add(key);
        event.target.value = [...pressedKeys].join("");
    };

    const handleKeyUp = (event) => {
        const { key } = event;
        pressedKeys.delete(key);
        event.target.value = [...pressedKeys].join("");
    };

    return (
        <div className="lession-practice-wrapper">
            <button id="hide-practice-button" onClick={hidePracticeContent}>
                <Icon icon={bxLeftArrowAlt} />
                Quay lại bài học
            </button>
            <div className="require-key">S</div>
            <button id="next-key">
                Phím khác
                <Icon icon={bxRightArrowAlt} />
            </button>
            <StenoInput
                parentSelector=".lession-practice-wrapper"
                onKeyDownHook={handleKeyDown}
                onKeyUpHook={handleKeyUp}
            />
            <div className="keyboards">
                <QwertyStenoKeyboad style={{ fontSize: "13px" }} />
                <StenoKeyboard style={{ fontSize: "20px" }} />
            </div>
            <Hands />
        </div>
    );
}

export default LessionPracticeContent;