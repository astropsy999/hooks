import Collapse from "../components/common/collapse";
import React from "react";
import HOCExample from "../components/examples/hoc/hocExample";
import CardWrapper from "../components/common/Card";
import HocExercise from "../components/exercises/hocExercise";
import BlockQuoteWrapper from "../components/common/blockQuote";
import Title from "../components/common/typografy/title";
import Subtitle from "../components/common/typografy/subtitle";
import Divider from "../components/common/divider";
const HOCLayout = () => {
    return (
        <>
            <Title>HOC</Title>
            <Collapse title="Інформація">
                <BlockQuoteWrapper>
                    <p>
                        Компонент вищого порядка (Higher-Order Component, HOC) -
                        це один із просунутих способів для повторного
                        використання логіки. HOC не є частиною API React, але
                        часто застосовуються через композиційну природу
                        компонентів.
                        <br />
                        Просто кажучи, компонент вищого порядку — це функція,
                        яка приймає компонент та повертає новий компонент.
                    </p>

                    <figcaption className="blockquote-footer">
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuoteWrapper>
            </Collapse>
            <CardWrapper>
                <i className="bi bi-lightbulb"></i> add{" "}
                <code>&quot;react/display-name&quot;: &quot;off&quot;</code> to
                EsLint rules
            </CardWrapper>
            <Divider />
            <Subtitle>Приклади</Subtitle>
            <HOCExample />
            <Divider />
            <Subtitle>Вправи</Subtitle>
            <HocExercise />
        </>
    );
};
export default HOCLayout;
