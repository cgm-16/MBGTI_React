import { Link } from "react-router-dom";

const StartBG = () => <img id="start" src="./bg/start.png" alt="" />;

const StartBtn = () => (
  <Link
    to="/test"
    id="startbtn"
    className="btn btn-warning btn-lg text-light text-nowrap"
  >
    시작하기
  </Link>
);

export default function StartPg() {
  return (
    <article id="startPg">
      <StartBG />
      <StartBtn />
    </article>
  );
}
