import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}

function runFactorial(n) {
    console.log("Обчислення факторіалу");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const buttonColor = useMemo(
        () => ({
            value: otherState ? "primary" : "warning"
        }),
        [otherState]
    );
    useEffect(() => {
        console.log("render buttonColor");
    }, [buttonColor]);

    const fact = useMemo(() => runFactorial(value), [value]);
    // const fact = runFactorial(value);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кешування складних обчислень</SmallTitle>
                <p>Значення: {value}</p>
                <p>Факторіал: {fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    Значення +10
                </button>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    Значення -10
                </button>
            </CardWrapper>

            <CardWrapper>
                <SmallTitle>Залежність від сторонніх setState</SmallTitle>
                <button
                    className={`btn btn-${buttonColor.value} ms-md-2`}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    Змінити колір
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
