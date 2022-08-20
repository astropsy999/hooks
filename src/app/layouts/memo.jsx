/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CollapseWrapper from "../components/common/collapse";
import CardWrapper from "../components/common/Card";
import MemoWithUseCallbackExample from "../components/examples/memo/memoWithUseCallbackExample";
import { Link } from "react-router-dom";
import MemoDependencyFunctionExample from "../components/examples/memo/memoDependencyFunctionExample";
import BlockQuoteWrapper from "../components/common/blockQuote";
import Title from "../components/common/typografy/title";
import Divider from "../components/common/divider";
import Subtitle from "../components/common/typografy/subtitle";
import SmallTitle from "../components/common/typografy/smallTitle";
const MemoExample = () => {
    return (
        <>
            <Title>React.Memo</Title>
            <CollapseWrapper>
                <BlockQuoteWrapper>
                    <p>
                        <code>React.Memo</code> - це higher order component.
                        <br />
                        Якщо ваш компонент завжди рендерить одне і те саме при
                        пропсах, що не змінюються, ви можете обгорнути його в
                        виклик React.memo для підвищення продуктивності в деяких
                        випадках, мемоізуючи тим самим результат. Це означає, що
                        React буде використовувати результат останнього
                        рендерингу, уникаючи повторного для візуалізації.
                        <br />
                        Просто кажучи, компонент вищого порядку — це функція,
                        яка приймає компонент і повертає новий компонент.
                    </p>

                    <figcaption>
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuoteWrapper>
            </CollapseWrapper>

            <CollapseWrapper title="Коли використовувати">
                <SmallTitle>Якщо компонент</SmallTitle>
                <ul>
                    <li>Часто ререндериться</li>
                    <li>
                        Компоненту передаються однакові параметри при кількох
                        рендерах
                    </li>
                    <li> Не має власного стану</li>
                </ul>
            </CollapseWrapper>
            <CardWrapper>
                <i className="bi bi-lightbulb"></i> Якщо функціональний
                компонент обгорнут в <code>React.memo</code> та використвує{" "}
                <code>useState, useReducer или useContext</code>, він повторно
                рендеруватиметься при зміні стану або контексту.
            </CardWrapper>
            <CardWrapper>
                <i className="bi bi-lightbulb"></i> Функціональний об'єкт
                дорівнює лише самому собі
            </CardWrapper>
            <Divider />
            <Subtitle>Приклади</Subtitle>
            <CardWrapper>
                <SmallTitle>Memo with useCallback</SmallTitle>
                <MemoWithUseCallbackExample />
            </CardWrapper>
            <CardWrapper>
                {" "}
                <SmallTitle>Memo dependency function</SmallTitle>
                <CardWrapper>
                    <i className="bi bi-lightbulb"></i> Якщо функція для
                    звіряння не задана, то виконується поверхнева звірка по{" "}
                    <Link
                        to={{
                            pathname:
                                "https://github.com/facebook/react/blob/v16.8.6/packages/shared/shallowEqual.js"
                        }}
                        target="_blank"
                    >
                        стандартному алгоритму
                    </Link>
                </CardWrapper>
                <MemoDependencyFunctionExample />
            </CardWrapper>
        </>
    );
};

export default MemoExample;
