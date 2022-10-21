import classNames from "classnames";
import "bulma/css/bulma.css";

export const Filter = (props) => {
  const { value, onChange } = props;

  const handleClick = (key, e) => {
    e.preventDefault();
    onChange(key);
  };
  return (
    <div className="panel-tabs">
      <a
        href="#"
        onClick={handleClick.bind(null, "ALL")}
        className={classNames({ "is-active": value === "ALL" })}
      >
        ALL
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, "ToDo")}
        className={classNames({ "is-active": value === "ToDo" })}
      >
        ToDo
      </a>
      <a
        href="#"
        onClick={handleClick.bind(null, "Done")}
        className={classNames({ "is-active": value === "Done" })}
      >
        Done
      </a>
    </div>
  );
};

export default Filter;
