import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <img
        src="/image/404-error.png"
        alt="Страница не найдена"
        className="not-found__image"
      />
      <h1 className="not-found__title">Страница не найдена</h1>
      <p className="not-found__text">
        Извините, запрашиваемая страница не существует или была перемещена.
        Возможно, вы ввели неправильный адрес или страница была удалена.
      </p>
      <Link to="/" className="not-found__button btn btn-primary">
        Вернуться на главную
      </Link>
    </div>
  );
};
