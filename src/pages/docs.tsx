import React from 'react';

const template = '<div id="rsg-root"></div><script src="/build/bundle.js"></script>';
export default function Docs(): JSX.Element {
    return <div dangerouslySetInnerHTML={{ __html: `${template}`}} />;
}