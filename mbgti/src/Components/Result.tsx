import { useRecoilValue } from "recoil";
import {
  btnColorState,
  gunLinkState,
  videoLinkState,
} from "../States/AnswerStates";

const ResultImg = ({ rURL }: { rURL: string }) => (
  <img id="resultimg" src={rURL} alt={rURL} />
);

const ResultLink = ({
  ytURL,
  btnColor,
}: {
  ytURL: string;
  btnColor: string;
}) => (
  <a
    id="playerbtn"
    className="btn"
    href={ytURL}
    target="_blank"
    rel="noreferrer"
    style={{ backgroundColor: btnColor }}
  >
    선수 영상 보러 가기
  </a>
);

const WatchFullLink = ({ btnColor }: { btnColor: string }) => (
  <a
    id="pmpsbtn"
    className="btn"
    href="https://youtu.be/9IdUFmko0pY"
    target="_blank"
    rel="noreferrer"
    style={{ backgroundColor: btnColor }}
  >
    시청하러 가기
  </a>
);

const ShareBtn = ({
  id,
  imgSrc,
  clickAction,
  altTxt,
}: {
  id: string;
  imgSrc: string;
  clickAction: React.MouseEventHandler;
  altTxt: string;
}) => (
  <div id={id} onClick={clickAction}>
    <img src={imgSrc} alt={altTxt} className="linkbtn" />
  </div>
);

export default function ResultPg() {
  const rURL = useRecoilValue(gunLinkState);
  const ytURL = useRecoilValue(videoLinkState);
  const btnColor = useRecoilValue(btnColorState);

  const url_default_fb = "https://www.facebook.com/sharer/sharer.php?u=";
  const url_default_tw_txt = "https://twitter.com/intent/tweet?text=";
  const url_default_tw_url = "&url=";
  const url_this_page = document.location.href;
  const url_combine_fb = url_default_fb + url_this_page;
  const url_combine_tw =
    url_default_tw_txt + document.title + url_default_tw_url + url_this_page;
  const url_combine_naver =
    "https://cafe.naver.com/ca-fe/cafes/29359582/menus/134/articles/write?boardType=L";
  const customOption = "scrollbars=no, width=600, height=600";

  function copylink() {
    navigator.clipboard.writeText("https://pmps-luv-mbgti.netlify.app/");
    alert("성공적으로 저장되었습니다.");
  }

  function share(strUrl: string, strOptions?: string) {
    if (typeof window.open === "function") {
      window.open(strUrl, "_blank", strOptions);
    } else {
      document.location.href = strUrl;
    }
  }

  return (
    <article id="result">
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
            id="fb"
            imgSrc="./sharebtn/fb.png"
            clickAction={() => share(url_combine_fb, customOption)}
            altTxt="페이스북으로 공유하기"
          />
          <ShareBtn
            id="twt"
            imgSrc="./sharebtn/twt.png"
            clickAction={() => share(url_combine_tw, customOption)}
            altTxt="트위터로 공유하기"
          />
          <ShareBtn
            id="nv"
            imgSrc="./sharebtn/nv.png"
            clickAction={() => share(url_combine_naver)}
            altTxt="네이버로 공유하기"
          />
          <ShareBtn
            id="lk"
            imgSrc="./sharebtn/link.png"
            clickAction={() => copylink()}
            altTxt="복사하기"
          />
        </div>
      </div>
    </article>
  );
}
