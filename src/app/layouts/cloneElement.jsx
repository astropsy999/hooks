import React from "react";
import BlockQuote from "../components/common/blockQuote";
import CardWrapper from "../components/common/Card";
import CollapseWrapper from "../components/common/collapse";
import Divider from "../components/common/divider";
import SmallTitle from "../components/common/typografy/smallTitle";
import Subtitle from "../components/common/typografy/subtitle";
import Title from "../components/common/typografy/title";
import CloneElementExample from "../components/examples/cloneElement/cloneElementExample";
const CloneElement = () => {
    return (
        <>
            <Title>React.cloneElement</Title>
            <CollapseWrapper>
                <BlockQuote>
                    <p>
                        Клонує і повертає новий React елемент, використовуючи
                        елемент як відправну точку. config повинен містити нові
                        пропси, key, а також ref. Отриманий елемент матиме
                        пропси вихідного елемента, а нові пропси будуть злиті
                        поверхово во одне. Нові дочірні елементи замінять
                        існуючі. key та ref з вихідного елемента будуть
                        збережені, якщо в config не було передано key and ref.
                    </p>

                    <figcaption>
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuote>
            </CollapseWrapper>
            <CardWrapper>
                <i className="bi bi-lightbulb"></i>{" "}
                <code>
                    React.cloneElement( element, [config], [...children] )
                </code>
            </CardWrapper>
            <CollapseWrapper title="Когда использовать">
                <SmallTitle>Если</SmallTitle>
                <ul>
                    <li>Неможливо змінити параметри</li>
                    <li>Необхідно змінити чи додати параметри</li>
                </ul>
            </CollapseWrapper>
            <Divider />
            <Subtitle>Приклади</Subtitle>
            <CloneElementExample />
        </>
    );
};

export default CloneElement;
