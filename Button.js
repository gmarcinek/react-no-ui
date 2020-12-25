import React from 'react';

const Button = React.forwardRef((porps, ref) => {
    return (React.createElement("button", { ref: ref },
        "A",
        porps.label));
});

export { Button };
//# sourceMappingURL=Button.js.map
