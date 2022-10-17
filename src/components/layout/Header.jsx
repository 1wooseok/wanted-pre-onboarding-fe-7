import css from "./Header.module.css";
import { useLocation, Link } from "react-router-dom";
import { useLoginState } from "../../context/LoginContext";
import { useLoginAction } from "../../context/LoginContext";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const loginState = useLoginState();
  const { logout } = useLoginAction();

  const handleLogout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      logout();
      navigate("/", { replace: true });
    }
  };

  return (
    <header className={css.header}>
      <div></div>
      <ul className={css.menus}>
        <li>
          <Link
            className={pathname === "/signup" ? css["active"] : null}
            to="/signup"
          >
            signup
          </Link>
        </li>
        <li>
          <Link
            className={pathname === "/todo" ? css["active"] : null}
            to="/todo"
          >
            todo
          </Link>
        </li>
        <li>
          {!loginState && (
            <Link className={pathname === "/" ? css["active"] : null} to="/">
              login
            </Link>
          )}
        </li>
      </ul>
      <div>
        {loginState && <Button onClick={handleLogout}>로그아웃</Button>}
      </div>
    </header>
  );
}
