import React from "react";

export const MessageBox = ({ variant, children }) => {
    return <div className={`p-4 border-solid border-transparent border-[0.5rem] alert-${variant || "info"}`}>{children}</div>;
};
