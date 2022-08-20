/* eslint-disable react/no-unescaped-entities */
import React from "react";
import BlockQuoteWrapper from "../components/common/blockQuote";
import CardWrapper from "../components/common/Card";

import CollapseWrapper from "../components/common/collapse";
import Divider from "../components/common/divider";
import Subtitle from "../components/common/typografy/subtitle";
import ReactChildrenExample from "../components/examples/children/reactChildrenExample";
import ChildrenExercise from "../components/exercises/childrenExercise";
const ReactChildren = () => {
    return (
        <>
            <h1>Children</h1>

            <CollapseWrapper title="Что такое Children">
                <figure>
                    <blockquote>
                        <p className="mt-3">
                            <code> props.children </code>- Це об'єкт, який
                            містить опис дітей.
                        </p>
                        <p>
                            <code>children</code> - не справжні діти, не
                            компоненти, це опис змісту дітей. Ми не можемо
                            змінювати будь-які параметри або редагувати будь-які
                            функції. Ми маємо доступ лише до читання.
                        </p>
                    </blockquote>
                </figure>
            </CollapseWrapper>

            <CollapseWrapper title="React.children">
                <figure>
                    <blockquote>
                        <p className="mt-3">
                            <code>React.Children</code> - це утиліта, що
                            надається React, яка надає функції для роботи з
                            непрозорою структурою даних this.props.children.
                        </p>
                    </blockquote>
                </figure>
            </CollapseWrapper>
            <CardWrapper>
                <i className="bi bi-lightbulb"></i>Якщо <code>children</code> —
                це <code>Fragment</code>, він розглядатиметься як цілий нащадок,
                а елементи всередині не будуть пройдені.
            </CardWrapper>

            <CollapseWrapper title="React.children Functions">
                <CollapseWrapper title="React.Children.map">
                    <BlockQuoteWrapper>
                        <p className="mt-3">
                            <code>
                                React.Children.map(children,
                                function[(thisArg)])
                            </code>
                            <br />
                            Викликає функцію для кожного безпосереднього
                            нащадка, що міститься в дитину, передаючи їх по
                            черзі в thisArg. Якщо children це масив, він буде
                            пройдений, і функція буде викликана для кожного
                            нащадка в масиві. Якщо дитина дорівнює null або
                            undefined, цей метод поверне null або undefined, а
                            не масив.
                        </p>
                        <p></p>
                    </BlockQuoteWrapper>
                </CollapseWrapper>
                <CollapseWrapper title="React.Children.count">
                    <BlockQuoteWrapper>
                        <p className="mt-3">
                            <code>React.Children.count(children)</code>
                            <br />
                            Повертає загальну кількість компонентів у children,
                            що дорівнює кількості викликів callback, переданого
                            в React.Children.map, які будуть здійснені.
                        </p>
                    </BlockQuoteWrapper>
                </CollapseWrapper>
                <CollapseWrapper title="React.Children.toArray">
                    <BlockQuoteWrapper>
                        <p className="mt-3">
                            <code>React.Children.toArray(children)</code>
                            <br />
                            Повертає непрозору структуру даних дітей у вигляді
                            плоского масиву з ключами, заданими кожному
                            дочірньому елементу. Корисно, якщо ви хочете
                            маніпулювати колекціями нащадків у ваших методах
                            рендеру, особливо якщо ви хочете відсортувати або
                            витягти частину this.props.children перед передачею
                            кудись.
                        </p>
                    </BlockQuoteWrapper>
                </CollapseWrapper>
            </CollapseWrapper>
            <Divider />
            <Subtitle>Приклади</Subtitle>

            <ReactChildrenExample />
            <Divider />
            <Subtitle>Вправи</Subtitle>
            <ChildrenExercise />
        </>
    );
};

export default ReactChildren;
