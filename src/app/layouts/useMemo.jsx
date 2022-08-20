/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CollapseWrapper from "../components/common/collapse";
import ComplexCalculateExample from "../components/examples/useMemo/complexCalculate";
import BlockQuote from "../components/common/blockQuote";
import Title from "../components/common/typografy/title";
import Subtitle from "../components/common/typografy/subtitle";
import Divider from "../components/common/divider";
const UseMemoExample = () => {
    return (
        <>
            <Title>useMemo</Title>
            <CollapseWrapper title="Mемоизация">
                <BlockQuote>
                    <p className="mt-2">
                        Мемоізація (англ. memoization від англ. memory та англ.
                        optimization) — у програмуванні збереження результатів
                        виконання функцій для запобігання повторного обчислення.
                        Це один із способів оптимізації, який застосовується для
                        збільшення швидкості виконання комп'ютерних програм.
                        Перед викликом функції перевіряється, чи функція
                        викликалася раніше:
                    </p>
                    <ul>
                        <li>
                            якщо не викликалася, то функція викликається, і
                            результат виконання зберігається;
                        </li>
                        <li>
                            якщо викликалася, використовується збережений
                            результат.
                        </li>
                    </ul>
                    <figcaption className="blockquote-footer">
                        <cite title="Wiki">Wiki</cite>
                    </figcaption>
                </BlockQuote>
            </CollapseWrapper>
            <CollapseWrapper>
                <BlockQuote>
                    <p>
                        <code>useMemo</code> Повертає мемоізоване значення
                    </p>
                    <p>
                        Передайте «створюючу» функцію та масив залежностей.
                        useMemo повторно обчислюватиме моемизоване значення лише
                        тоді, коли значення будь-якої із залежностей змінилося.
                        Ця оптимізація допомагає уникнути дорогих обчислень
                        кожного рендеру.
                    </p>
                    <figcaption>
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuote>
            </CollapseWrapper>
            <Divider />
            <Subtitle>Приклади</Subtitle>
            <ComplexCalculateExample />
        </>
    );
};

export default UseMemoExample;
