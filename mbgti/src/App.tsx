import React, { useTransition } from 'react';
import { useState } from 'react';
import { useReducer } from 'react';
import { MoonLoader } from 'react-spinners';

type PageAction = { type: 'Next' } | { type: 'Start' };

const gunUrls = [
  "./results/jdn.png", "./results/jdy.png"
  , "./results/jjn.png", "./results/jjy.png"
  , "./results/ydn.png", "./results/ydy.png"
  , "./results/yjn.png", "./results/yjy.png"
];

const quizUrls = [
  "./bg/mbgti.png", "./bg/mbgti2.png"
  , "./bg/mbgti3.png", "./bg/mbgti4.png"
  , "./bg/mbgti5.png", "./bg/mbgti6.png"
  , "./bg/mbgti7.png", "./bg/mbgti8.png"
  , "./bg/mbgti9.png"
];

const quizQuestions = [
  "비행기에서 떨어질 때?", "근처에 보급품이\n떨어지면?"
  , "상대방은 나를 보지\n못했고, 나만 상대방을\n포착한 상황!!"
  , "내 팀원이\n위험한 위치에 있는 것을\n봤을 때 나는?"
  , "우리 팀이\n교전을 준비할 때,\n나는?"
  , "둘 중 하나를\n무조건 버려야 할 때\n내가 먼저 버릴 것은?"
  , "기절한 팀원이 '헬프!'를\n외치면 나는?"
  , "치킨을 아쉽게 놓쳤을때?"
  , "이번 판\n막판하려고 했는데,\n허무하게 죽었다면?"
];

const quizAB = [
  { A: "고민은 무슨, 랜드마크가 국룰이지~", B: "오래 살고 봐야 하는 거 아님? 짤파밍 ㄱㄱ" }
  , { A: "보급은 못참지ㅎ 줍줍", B: "사람들 몰리겠네;; 튀튀" }
  , { A: "바아~로 킬 추가하러 가야지~", B: "일단 멈춰! 괜히 나서면 안 돼,," }
  , { A: "나만 믿어! 달려 가서 적을 손봐주기!", B: "위험에 처한 팀원을 구해주기 위해 연막탄 던져주기!" }
  , { A: "운전 실력 뽐내며 교전지역 정찰하기", B: "언덕 타고 올라가서 팀의 시야 넓혀주기" }
  , { A: "힐템을 버린다", B: "총알탄을 버린다" }
  , { A: "인생은 실전ㅇㅇ 쟤를 살리는 게 이득인지 빠르게 따져본다", B: "의리에 죽고 의리에 사는 나! 일단 몸이 반응한다" }
  , { A: "나 왜 졌지? 그때 그렇게 했어야했나? 머리속으로 시뮬레이션 백만번 돌림", B: "머선129...3초간 멍때리고 바로 다음판 돌림" }
  , { A: "막판으로 맘 정했으면 그대로 끝내야지~(끈다)", B: "아,, 담판 무조건 치킨먹을 각인데,, 한판 더 기?" }
];

const vidUrls = [
  "https://youtu.be/SxxbptHm_I0?t=11741", "https://youtu.be/UvkbcAg-HmU?t=11069"
  , "https://youtu.be/SxxbptHm_I0?t=5262", "https://youtu.be/UvkbcAg-HmU?t=3143"
  , "https://youtu.be/SxxbptHm_I0?t=1012", "https://youtu.be/SxxbptHm_I0?t=1243"
  , "https://youtu.be/UvkbcAg-HmU?t=10647", "https://youtu.be/B83dvSRcWWc?t=7896"
];

const StartBG = () => <img id="start" src="./bg/start.png" alt="" />;

const StartBtn = ({ onStartClick }: { onStartClick: React.MouseEventHandler }) => <div id="startbtn" className="btn btn-warning btn-lg text-light text-nowrap" onClick={onStartClick}>시작하기</div>;

const BG = () => <img src="./bg/bg.jpg" id="bg" alt="" />;

const QPic = ({ qURL }: { qURL: string }) => <img src={qURL} id='bgframe' alt={qURL}></img>;

const QTxt = ({ qTxt }: { qTxt: string }) => <div id='probbox'>{qTxt}</div>;

const ResultImg = ({ rURL }: { rURL: string }) => <img id="resultimg" src={rURL} alt={rURL} />;

const ResultLink = ({ ytURL, btnColor }: { ytURL: string, btnColor: string }) => <a id="playerbtn" className="btn" href={ytURL} target="_blank" rel='noreferrer' style={{ backgroundColor: btnColor }}>선수 영상 보러 가기</a>;

const WatchFullLink = ({ btnColor }: { btnColor: string }) => <a id="pmpsbtn" className="btn" href="https://youtu.be/9IdUFmko0pY" target="_blank" rel='noreferrer' style={{ backgroundColor: btnColor }}>시청하러 가기</a>

function ShareBtn({ id, imgSrc, clickAction, altTxt } : {id: string, imgSrc: string, clickAction: React.MouseEventHandler, altTxt: string}){
return (
    <div id={id} onClick={clickAction}>
      <img src={imgSrc} alt={altTxt} className="linkbtn" />
    </div>);
}

function StartPg({ onStartPgChange }: { onStartPgChange: React.MouseEventHandler }) {
  return (
    <article id='startPg'>
      <StartBG />
      <StartBtn onStartClick={onStartPgChange} />
    </article>
  );
}

function MBGTI({ prob, onOptionA, onOptionB }: { prob: number, onOptionA: React.MouseEventHandler, onOptionB: React.MouseEventHandler }) {
  return (
    <article id='mbgti'>
      <div id='question'>
        <BG />
        <QPic qURL={quizUrls[prob]} />
        <QTxt qTxt={quizQuestions[prob]} />
        <div id='qbox'>
          <div className='btn btn-light ' onClick={onOptionA}>
            <div className='bigletter'>{'A'}</div>
            <div className='smletter'>{quizAB[prob]['A']}</div>
          </div>
          <div className='btn btn-light ' onClick={onOptionB}>
            <div className='bigletter'>{'B'}</div>
            <div className='smletter'>{quizAB[prob]['B']}</div>
          </div>
        </div>
      </div>
    </article>
  );
}

function ResultPg({ rURL, ytURL, btnColor }: { rURL: string, ytURL: string, btnColor: string }) {
  const url_default_fb = "https://www.facebook.com/sharer/sharer.php?u=";
  const url_default_tw_txt = "https://twitter.com/intent/tweet?text="; 
  const url_default_tw_url = "&url=";
  const url_this_page = document.location.href;
  const url_combine_fb = url_default_fb + url_this_page;
  const url_combine_tw = url_default_tw_txt + document.title + url_default_tw_url + url_this_page;
  const url_combine_naver = "https://cafe.naver.com/ca-fe/cafes/29359582/menus/134/articles/write?boardType=L";
  const customOption = 'scrollbars=no, width=600, height=600';

  function copylink() {
    navigator.clipboard.writeText("https://pmps-luv-mbgti.netlify.app/");
    alert('성공적으로 저장되었습니다.')
  }

  function share(strUrl: string, strOptions?: string) {
    if ( typeof window.open === "function") {
        window.open(strUrl, "_blank", strOptions);
    } else {
        document.location.href = strUrl;
    }
  }

  return (
    <article id='result'>
      <div id="results">
        <ResultImg rURL={rURL} />
        <div id="playerbtnpoz">
          <ResultLink ytURL={ytURL} btnColor={btnColor} />
        </div>
        <div id="pmpsbtnpoz">
          <WatchFullLink btnColor={btnColor} />
        </div>
        <div id="sharebox">
          <ShareBtn
            id='fb'
            imgSrc='./sharebtn/fb.png'
            clickAction={() => share(url_combine_fb, customOption)}
            altTxt='페이스북으로 공유하기'
          />
          <ShareBtn
            id='twt'
            imgSrc='./sharebtn/twt.png'
            clickAction={() => share(url_combine_tw, customOption)}
            altTxt='트위터로 공유하기'
          />
          <ShareBtn
            id='nv'
            imgSrc='./sharebtn/nv.png'
            clickAction={() => share(url_combine_naver)}
            altTxt='네이버로 공유하기'
          />
          <ShareBtn
            id='lk'
            imgSrc='./sharebtn/link.png'
            clickAction={() => copylink()}
            altTxt='복사하기'
          />
        </div>
      </div>
    </article>
  );
}

export default function App() {
  const [isPending, startTransition] = useTransition();
  const [page, changePage] = useReducer(pageReducer, 0)
  const [vUrl, setVUrl] = useState('');
  const [gUrl, setGUrl] = useState('');
  const [btnColor, setBtnColor] = useState('')
  const [prob, setProb] = useState(0);
  const [ans, setAns] = useState([] as boolean[]);

  function choose(choice: boolean) {
    if (prob < quizQuestions.length - 1) {
      setProb(prob + 1);
      setAns(ans.concat([choice]));
    } else {
      const newAns = ans.concat([choice])
      const j = newAns.slice(0, 3).reduce((c, e) => c + (true === e ? 1 : 0), 0)
      const c = newAns.slice(3, 6).reduce((c, e) => c + (true === e ? 1 : 0), 0)
      const ch = newAns.slice(6).reduce((c, e) => c + (true === e ? 1 : 0), 0)

      const isYp = j >= 2 ? true : false;
      const isCharge = ch >= 2 ? true : false;
      const isCool = c >= 2 ? true : false;

      setBtnColor(isYp ? "#94C9CD" : "#FE8D06");
      console.log(isYp, isCharge, isCool, newAns);

      if (!isYp && isCharge && isCool) {
        setVUrl(vidUrls[0]);
        setGUrl(gunUrls[0]);
      } else if (!isYp && isCharge && !isCool) {
        setVUrl(vidUrls[1]);
        setGUrl(gunUrls[1]);
      } else if (!isYp && !isCharge && isCool) {
        setVUrl(vidUrls[2]);
        setGUrl(gunUrls[2]);
      } else if (!isYp && !isCharge && !isCool) {
        setVUrl(vidUrls[3]);
        setGUrl(gunUrls[3]);
      } else if (isYp && isCharge && isCool) {
        setVUrl(vidUrls[4]);
        setGUrl(gunUrls[4]);
      } else if (isYp && isCharge && !isCool) {
        setVUrl(vidUrls[5]);
        setGUrl(gunUrls[5]);
      } else if (isYp && !isCharge && isCool) {
        setVUrl(vidUrls[6]);
        setGUrl(gunUrls[6]);
      } else {
        setVUrl(vidUrls[7]);
        setGUrl(gunUrls[7]);
      }
      startTransition(() => changePage({ type: 'Next' }));
    }
  }

  return (
    <>
      {isPending && <MoonLoader />}
      {page === 0 && <StartPg onStartPgChange={() => startTransition(() => changePage({ type: 'Next' }))} />}
      {page === 1 && <MBGTI prob={prob} onOptionA={() => choose(true)} onOptionB={() => choose(false)} />}
      {page === 2 && <ResultPg rURL={gUrl} ytURL={vUrl} btnColor={btnColor} />}
    </>
  );
}

function pageReducer(page: number, action: PageAction): number {
  switch (action.type) {
    case 'Start':
      return 0;
    case 'Next':
      return page + 1;
    default:
      throw new Error('Unhandled action');
  }
}