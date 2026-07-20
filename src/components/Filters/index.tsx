import style from "./style.module.css";

export function Filters() {
  return (
    <nav className={style.container}>
      <ul>
        <li className={style.selected}>
          <a>Tudo</a>
        </li>
        <li>
          <a>JavaScript</a>
        </li>
        <li>
          <a>React</a>
        </li>
        <li>
          <a>Tailwind CSS</a>
        </li>
        <li>
          <a>Node.js</a>
        </li>
      </ul>
    </nav>
  );
}
