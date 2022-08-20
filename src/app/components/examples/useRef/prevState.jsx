import React, { useRef, useEffect, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    return (
        <CardWrapper>
            <SmallTitle>Попередній стан</SmallTitle>
            <Divider />
            <p>Попередній стан: {prevState.current}</p>
            <p>Поточний стан: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Зміна стану
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
