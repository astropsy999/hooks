import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const blockRef = useRef();
    const smallRef = useRef();
    const changeBlock = () => {
        blockRef.current.style.width = "80px";
        blockRef.current.style.height = "150px";
        smallRef.current.innerText = "text";
    };
    return (
        <CollapseWrapper title="Вправа">
            <p className="mt-3">
                У вас є блок, у якого задані ширина та висота. Додайте кнопку,
                при натисканні якої зміниться наступне:
            </p>
            <ul>
                <li>Зміниться вміст блоку на &quot;text&quot;</li>
                <li>висота і ширина дорівнюватимуть 150 і 80 відповідно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                ref={blockRef}
            >
                <small ref={smallRef}>Блок</small>
            </div>
            <button className="btn btn-warning m-4" onClick={changeBlock}>
                Змінити блок
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
