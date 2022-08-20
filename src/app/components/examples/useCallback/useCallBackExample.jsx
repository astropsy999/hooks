/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    const validateWthoutCallback = (data) => {
        console.log("data: ", data);
    };
    const validateWithCallback = useCallback((data) => {
        console.log("data: ", data);
    }, []);
    useEffect(() => {
        validateWthoutCallback(data);
        validateWithCallback(data);
    }, [data]);

    useEffect(() => {
        withOutCallback.current++;
    }, [validateWthoutCallback]);
    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    return (
        <CardWrapper>
            <SmallTitle>Приклад</SmallTitle>

            <p>Рендер withOutCallback: {withOutCallback.current}</p>
            <p>Рендер withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            {data && (
                <input
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={data.email}
                />
            )}
        </CardWrapper>
    );
};

export default UseCallBackExample;
