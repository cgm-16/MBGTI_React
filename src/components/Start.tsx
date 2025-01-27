import { Link } from "react-router-dom";
import start from "../assets/images/bg/start.png"

const StartBackground = () => <img id="start" src={start} alt="" />;

const StartButton = () => (
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
      <StartBackground />
      <StartButton />
    </article>
  );
}
