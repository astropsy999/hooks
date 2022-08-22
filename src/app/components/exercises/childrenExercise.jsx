/* eslint-disable react/prop-types */
import React from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Вправа">
            <p className="mt-3">
                У вас є компоненти Списку. Вам необхідно до кожного з них додати
                порядковий номер щодо того, як вони розміщуються на сторінці. Ви
                можете використовувати як <code>React.Children.map</code> так і{" "}
                <code>React.Children.toArray</code>
            </p>
            <Divider />
            <SmallTitle>Рішення</SmallTitle>
            <ComponentList>
                <Component />
                <Component />
                <Component />
            </ComponentList>
        </CollapseWrapper>
    );
};

const ComponentList = ({ children }) => {
    const arrayOfChildren = React.Children.toArray(children);
    return React.Children.map(arrayOfChildren, (child) =>
        React.cloneElement(child, {
            ...child.props,
            num: +child.key.replace(".", "") + 1
        })
    );
};

const Component = ({ num }) => {
    return <div>{num}. Компонент списка</div>;
};

export default ChildrenExercise;
