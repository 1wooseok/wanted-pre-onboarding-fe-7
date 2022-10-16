import { Navigate } from "react-router-dom";
import { useLoginState } from "../../context/LoginContext";

export default function Todo() {
  const loginState = useLoginState();

  return (
    <>
      {/* 비로그인 리다이렉트 */}
      {!loginState && <Navigate to="/" />}
      <h1>할 일 목록 페이지</h1>
      <ul>
        <li>
          <input disabled={true} />
          <button>수정</button>
          <button>삭제</button>
        </li>
        <li>
          <input disabled={true} />
          <button>수정</button>
          <button>삭제</button>
        </li>
        <li>
          <input disabled={true} />
          <button>수정</button>
          <button>삭제</button>
        </li>
      </ul>
      <form>
        <input />
        <button>추가</button>
      </form>
    </>
  );
}
