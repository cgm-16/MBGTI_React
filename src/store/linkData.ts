import Question1 from "../assets/images/bg/mbgti.png";
import Question2 from "../assets/images/bg/mbgti2.png";
import Question3 from "../assets/images/bg/mbgti3.png";
import Question4 from "../assets/images/bg/mbgti4.png";
import Question5 from "../assets/images/bg/mbgti5.png";
import Question6 from "../assets/images/bg/mbgti6.png";
import Question7 from "../assets/images/bg/mbgti7.png";
import Question8 from "../assets/images/bg/mbgti8.png";
import Question9 from "../assets/images/bg/mbgti9.png";
import jdn from "../assets/images/results/jdn.png";
import jdy from "../assets/images/results/jdy.png";
import jjn from "../assets/images/results/jjn.png";
import jjy from "../assets/images/results/jjy.png";
import ydn from "../assets/images/results/ydn.png";
import ydy from "../assets/images/results/ydy.png";
import yjn from "../assets/images/results/yjn.png";
import yjy from "../assets/images/results/yjy.png";

type urls = string[]

type ResultItem = {
  gunUrl: string
  vidUrl: string
}

type Result = Map<string, ResultItem>;

export const result: Result = new Map([
  ["jdn", {gunUrl: jdn, vidUrl: "https://youtu.be/SxxbptHm_I0?t=11741"}],
  ["jdy", {gunUrl: jdy, vidUrl: "https://youtu.be/UvkbcAg-HmU?t=11069"}],
  ["jjn", {gunUrl: jjn, vidUrl: "https://youtu.be/SxxbptHm_I0?t=5262"}],
  ["jjy", {gunUrl: jjy, vidUrl: "https://youtu.be/UvkbcAg-HmU?t=3143"}],
  ["ydn", {gunUrl: ydn, vidUrl: "https://youtu.be/SxxbptHm_I0?t=1012"}],
  ["ydy", {gunUrl: ydy, vidUrl: "https://youtu.be/SxxbptHm_I0?t=1243"}],
  ["yjn", {gunUrl: yjn, vidUrl: "https://youtu.be/UvkbcAg-HmU?t=10647"}],
  ["yjy", {gunUrl: yjy, vidUrl: "https://youtu.be/B83dvSRcWWc?t=7896"}],
])

export const quizUrls : urls = [
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
];
