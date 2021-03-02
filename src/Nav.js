import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <ul class="menu">
        <li class="logo">
          <Link to="/">FOODANISTA</Link>
        </li>
        <li class="item">
          <Link to="/">Home</Link>
        </li>
        <li class="item">
          <Link to="/recipe">Recipes</Link>
        </li>

        <li class="item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
