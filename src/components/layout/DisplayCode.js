import React from "react";
/* libs */
import { CopyBlock, monokaiSublime } from 'react-code-blocks';

const DisplayCode = (props) => {
    
    /* props */
    const {
        code = '',
        language = 'jsx',
        showLineNumbers = true,
        highlight = "",
        codeBlock = false,
        theme = monokaiSublime,
    } = props;

    return (<>
        <CopyBlock
            text={code?.trim()}
            language={language}
            showLineNumbers={showLineNumbers}
            theme={theme}
            highlight={highlight}
            codeBlock={codeBlock}
        />
    </>)
}

export default DisplayCode;
