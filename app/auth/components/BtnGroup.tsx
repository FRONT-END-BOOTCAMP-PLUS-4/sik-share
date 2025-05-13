import LoginButton from "./LoginButton";

export default function BtnGroup() {
  return (
    <div>
      <ul>
        <li>
          <LoginButton name="카카오" />
        </li>
        <li>
          <LoginButton name="네이버" />
        </li>
        <li>
          <LoginButton name="구글" />
        </li>
      </ul>
    </div>
  );
}
