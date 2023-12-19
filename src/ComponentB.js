import React, { useContext } from "react";
import { Context } from "./Context";
export default function ComponentB() {
    const [context, _] = useContext(Context);
    return <div>ComponentB: {context}</div>;
}