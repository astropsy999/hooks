/* eslint-disable react/prop-types */
import React from "react";
import CardWrapper from "../common/Card";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";
import SmallTitle from "../common/typografy/smallTitle";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <div>
            {!isAuth ? (
                <button className="btn btn-primary" onClick={onLogin}>
                    Увійти
                </button>
            ) : (
                <button className="btn btn-warning" onClick={onLogOut}>
                    Вийти з системи
                </button>
            )}
        </div>
    );
};

const withFunctions = (Component) => (props) => {
    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };
    const onLogOut = () => {
        localStorage.removeItem("auth");
    };
    const isAuth = !!localStorage.getItem("auth");
    return (
        <div>
            <CardWrapper>
                <Component
                    isAuth={isAuth}
                    onLogOut={onLogOut}
                    onLogin={onLogin}
                    {...props}
                />
            </CardWrapper>
        </div>
    );
};

const ComponentWithHoc = withFunctions(SimpleComponent);

const HocExercise = () => {
    return (
        <>
            <CollapseWrapper title="Вправа">
                <p className="mt-3">
                    Вам необхідно реалізувати компонент{" "}
                    <code>SimpleComponent</code>, який:
                </p>
                <ul>
                    <li>
                        В <code>props</code> приймає параметри:{" "}
                        <code>onLogin</code>, <code>onLogOut</code>,{" "}
                        <code>isAuth</code>
                    </li>
                    <li>
                        Відображає кнопку &quot;Увійти&quot;, якщо користувач НЕ
                        авторизований (залежить від параметра{" "}
                        <code>isAuth</code> в <code>props</code>)
                    </li>
                    <li>
                        Відображає кнопку зі змістом &quot;Вийти з
                        системи&quot;, якщо користувач авторизований (залежить
                        від параметра <code>isAuth</code> у <code>props</code>)
                    </li>
                    <li>
                        При натисканні на &quot;Увійти&quot;, викликається
                        функція <code>onLogin</code>, а при настисканні на
                        &quot;Вийти з системи&quot; викликається{" "}
                        <code>onLogOut</code>
                    </li>
                </ul>
                <p className="mt-3">
                    Вам необхідно створити HOC з назвою{" "}
                    <code>withFunctions</code>, який буде приймати компонент{" "}
                    <code>SimpleComponent</code> та робитиме наступне:
                </p>
                <ul>
                    <li>
                        Додасть обгортку на компонент у вигляді карточки
                        boostrap (компонент{" "}
                        <code>components/common/Card.jsx</code>)
                    </li>
                    <li>
                        Передасть параметр <code>isAuth</code>. Цей параметр є
                        звичайною змінною <code>const</code> в функції{" "}
                        <code>withFunctions</code> та містить в собі результат
                        перевірки наявності даних в <code>localStorage</code> по
                        ключу <code>auth</code>. На даний момент нам не важливо,
                        які дані там зберігати (наприклад, можна перевіряти
                        наявність рядка <code>&quot;token&quot;</code>)
                    </li>
                    <li>
                        Передає параметри <code>onLogin</code> та{" "}
                        <code>onLogOut</code>. Функції також знаходяться в{" "}
                        <code>withFunctions</code>. <br />
                        <code>onLogin</code> - додає <code>auth</code> в{" "}
                        <code>localStorage</code> з будь-яким значенням
                        (наприклад рядок <code>&quot;token&quot;</code>) <br />
                        <code>onLogOut</code> - видаляє <code>auth</code> з{" "}
                        <code>localStorage</code>
                    </li>
                </ul>
                <p>
                    Через <code>withFunctions</code> необхідно створити новий
                    компонент <code>ComponentWithHoc</code> наступним чином:
                    <br />
                    <code>
                        const ComponentWithHoc = withFunctions(SimpleComponent);
                    </code>
                    <br />
                    Потім його потрібно просто вивести в шаблон
                </p>
                <p>
                    Примітка: під час виклику <code>onLogin</code> чи{" "}
                    <code>onLogOut</code> кнопка в компоненті{" "}
                    <code>SimpleComponent</code> оновиться після
                    перезавантаження сторінки
                </p>
            </CollapseWrapper>
            <Divider />
            <SmallTitle>Рішення</SmallTitle>
            <ComponentWithHoc />
        </>
    );
};

export default HocExercise;
