## 배포 주소

<a href="https://wanted-pre-onboarding-fe-7-nine.vercel.app/" targe="_blank">https://wanted-pre-onboarding-fe-7-nine.vercel.app/</a>

<br />

## 프로젝트 실행 방법

```shell
git clone https://github.com/1wooseok/wanted-pre-onboarding-fe-7.git && cd wanted-pre-onboarding-fe-7 && npm run i && npn run start
```

<br />

## :: 1. 로그인 / 회원가입

  <br/>

- 로그인과 회원가입 페이지를 별도의 경로로 분리했으며,

  성공시 `/todo`로 redirect,

  실패시 적절한 경고문을 표시합니다.

<br />

- `context api`를 사용해서 로그인 상태를 전역적으로 관리하며,

  로그인 or 회원가입시 `localStorage`에 토큰 저장후 로그인 상태는 `true`가 되며,

  로그아웃시 토큰을 삭제하고 로그인 상태는 `false`가 됩니다.

  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/context/LoginContext.jsx#:~:text=const-,actions,-%3D%20useMemo(">로그인 코드</a>

<br />

#### Assignment1

- 이메일과 비밀번호의 유효성 검사

  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/utils/validateFormData.js">유효성 검사 코드</a>

- 버튼 비활성화

  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/components/Form/AuthForm.jsx#:~:text=%3D%7B!-,isValidForm,-%7D%3E">버튼 비활성화 코드</a>

#### Assignment2

- 로그인 API 호출, 토큰 저장, 리다이렉트 함수를 각각 구현후

  page컴포넌트에서 사용하는 방식으로 구현했습니다.

  1.  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/api/auth/onLogin.js">로그인 API호출 코드</a>

  2.  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/context/LoginContext.jsx#:~:text=const-,actions,-%3D%20useMemo(">토큰 저장 & 로그인 전역상태 변경 코드</a>

  3.  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/pages/Login.jsx">page 및 리다이렉트 코드</a>

<br />

#### Assignment3

- 로그인 상태를 전역적으로 관리하므로

  페이지따라 로그인 상태를 조회후 리다이렉트 시킵니다

```jsx
ex)
// login context
const [loginState, setLoginState] = useState(
  Boolean(LocalStorage.get("access_token"))
);
```

```jsx
// redirect
export default function Login() {
  const loginState = useLoginState();

  useEffect(() => {
    if (loginState) {
      navigate("/todo");
    }
  }, [loginState, navigate]);

  return <AuthForm title="로그인" onSubmit={onSubmit} />;
}
```

<br />

---

<br />

## :: 2. 투두 리스트

#### Assignment4

- `/todo`경로에 진입시 `useEffect`를 사용해 todo 데이터를 불러와 렌더링 합니다.

<a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/pages/Todos.jsx#:~:text=//%20init-,useEffect,-(()">투두 페이지 코드</a>

<br />

#### Assignment5

- `useReducer`로 todo 상태와 변경 로직을 분리했습니다.

  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/utils/todoReducer.jsx">리듀서 코드</a>

- crud 요청후 반환값을 `reducer`함수에 전달하여 상태를 알맞게 변경합니다.

  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/tree/main/src/api/todos">crud 요청 코드</a>

<br />

- 상태에 따라 `input`이 `활성화/비활성화` 됩니다.

  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/components/Todo/TodoItem.jsx">투두 입력창 코드</a>
