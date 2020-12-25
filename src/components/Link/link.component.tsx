import React from 'react'

export const Link = React.forwardRef<HTMLAnchorElement, {}>((porps, ref) => {
    return (
        <a ref={ref} href="a">
            Link
        </a>
    );
});