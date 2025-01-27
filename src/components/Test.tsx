import { useRecoilState, useSetRecoilState } from "recoil";
import {
  btnColorState,
  gunLinkState,
  videoLinkState,
} from "../store/answerStates";
import { ansState, questionNumberState } from "../store/testStates";
import { quizUrls, result } from "../store/linkData";
import { quizAB, quizQuestions } from "../store/quizStrings";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import bgImage from "../assets/images/bg/bg.jpg";

type QuestionImageProps = { qURL: string };
type QuestionStringProps = { qTxt: string };

const BG = () => <img src={bgImage} id="bg" alt="" />;

const QuestionImage = ({ qURL }: QuestionImageProps) => (
  <img src={qURL} id="bgframe" alt={qURL} />
);

const QuestionString = ({ qTxt }: QuestionStringProps) => (
  <div id="probbox">{qTxt}</div>
);

export default function MBGTI() {
  const [question, setQuestion] = useRecoilState(questionNumberState);
  const [answer, setAnswer] = useRecoilState(ansState);
  const setVUrl = useSetRecoilState(videoLinkState);
  const setGUrl = useSetRecoilState(gunLinkState);
  const setBtnColor = useSetRecoilState(btnColorState);
  const [navigateToResult, setNavigateToResult] = useState(false);

  function handleAnswers() {
    const judge = answer.slice(0, 3).reduce((c, e) => c + e);
    const cool = answer.slice(3, 6).reduce((c, e) => c + e);
    const charge = answer.slice(6).reduce((c, e) => c + e);
    const resultType =
      (judge >= 2 ? "y" : "j") +
      (charge >= 2 ? "d" : "j") +
      (cool >= 2 ? "n" : "y");
    const resultItem = result.get(resultType)!;
    setBtnColor(judge >= 2 ? "#94C9CD" : "#FE8D06");
    setVUrl(resultItem.vidUrl);
    setGUrl(resultItem.gunUrl);
    setNavigateToResult(true);
  }

  function choose(choice: number) {
    setAnswer([...answer, choice]);
    if (question < quizQuestions.length - 1) setQuestion(question + 1);
    else {
      handleAnswers();
    }
  }

  return (
    <article id="mbgti">
      <div id="question">
        <BG />
        <QuestionImage qURL={quizUrls[question]} />
        <QuestionString qTxt={quizQuestions[question]} />
        <div id="qbox">
          <div className="btn btn-light " onClick={() => choose(1)}>
            <div className="bigletter">A</div>
            <div className="smletter">{quizAB[question]["A"]}</div>
          </div>
          <div className="btn btn-light " onClick={() => choose(0)}>
            <div className="bigletter">B</div>
            <div className="smletter">{quizAB[question]["B"]}</div>
          </div>
        </div>
        {navigateToResult && <Navigate to="/result" />}
      </div>
    </article>
  );
}
