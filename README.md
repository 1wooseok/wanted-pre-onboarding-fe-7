## 배포 주소

<a href="https://1wooseok.github.io/wanted-pre-onboarding-fe-7/" targe="_blank">https://1wooseok.github.io/wanted-pre-onboarding-fe-7/</a>

<br />

## 프로젝트 실행 방법

```shell
git clone https://github.com/1wooseok/wanted-pre-onboarding-fe-7.git && cd wanted-pre-onboarding-fe-7 && npm run i && npn run start
```

<br />

## :: 1. 로그인 / 회원가입

`/`: 로그인 페이지 입니다.

`/signup`: 회원가입 페이지 입니다.

  <br/>

로그인과 회원가입 페이지를 별도의 경로로 분리했으며,

성공시 `/todo`로 redirect, 실패시 적절한 경고문을 표시합니다.

<br />

`context api`를 사용해서 로그인 상태를 전역적으로 관리하며,

로그인 or 회원가입시 `localStorage`에 토큰을 저장하고 로그인 상태는 `true`가 되며,

로그아웃시 토큰을 삭제하고 로그인 상태는 `false`가 됩니다.

<a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/context/LoginContext.jsx#:~:text=const-,actions,-%3D%20useMemo(">로그인 코드</a>

<br />

#### Assignment1

- 이메일과 비밀번호의 유효성 검사

  유효성 검사를 하는 함수를 만들어
  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/utils/validateFormData.js">유효성 검사 코드</a>

- 버튼 비활성화

  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/components/Form/AuthForm.jsx">버튼 비활성화 코드</a>

#### Assignment2

- 로그인 API호출, 로컬 스토리지에 토큰 저장, 리다이렉트 함수를 각각 구현후
  page컴포넌트에서 사용하는 방식으로 구현했습니다.

1.  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/api/actions/loginAction.js">로그인 API호출 코드</a>

2.  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/context/LoginContext.jsx#:~:text=%3D%3E%20(%7B-,login,-(token)">토큰 저장 & 로그인 전역상태 변경 코드</a>

3.  <a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/pages/Login.jsx">pag에서 사용 및 리다이렉트 코드</a>

<br />

#### Assignment3

로그인 상태를 전역적으로 관리하므로

리다이렉트가 필요한 컴포넌트에서 loginState를 조회해서

true일 경우 리다이렉트 합니다.

```jsx
// login context
const [loginState, setLoginState] = useState(
  Boolean(LocalStorage.get("access_token"))
);
```

```jsx
// redirect
export default function Login() {

  ...

  return (
    <>
      {loginState && <Navigate to="/todo" />}
      <AuthForm title="로그인" onSubmit={onSubmit} />
    </>
  );
}
```

<br />

---

<br />

## :: 2. 투두 리스트

#### Assignment4

- `/todo`경로에 진입시 `useEffect`를 사용해 todo 데이터를 불러와 렌더링 합니다.

<a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/pages/Todos.jsx#:~:text=//%20init-,useEffect,-(()">투두 리스트 코드</a>

<a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/components/Todo/TodoItem.jsx">투두 입력창 코드</a>

<br />

#### Assignment5

`useReducer`로 투두 리스트 상태와 변경 로직을 분리했습니다.

수정, 삭제는 커스텀 훅 으로 따로 분리해

요청후 반환값을 `reducer`함수에 전달하여 상태를 알맞게 변경합니다.

수정모드는 `input`의 `disabled`속성이 상태에 따라 바뀜으로서 활성화/비활성화 됩니다.

<a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/utils/todoReducer.jsx">리듀서 코드</a>

<a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/tree/main/src/hooks/todos">커스텀 훅 코드</a>

<a href="https://github.com/1wooseok/wanted-pre-onboarding-fe-7/blob/main/src/components/Todo/TodoItem.jsx">투두 입력창</a>
