import facebookIcon from "../assets/images/sharebtn/fb.png";
import kakaoIcon from "../assets/images/sharebtn/kko.png";
import linkIcon from "../assets/images/sharebtn/link.png";
import naverIcon from "../assets/images/sharebtn/nv.png";
import twitterIcon from "../assets/images/sharebtn/twt.png";

type ShareButtonProps = {
  id: string;
  clickAction: React.MouseEventHandler;
  altTxt: string;
};

const ShareButton = ({ id, clickAction, altTxt }: ShareButtonProps) => {
  const src = new Map([
    ["fb", facebookIcon],
    ["twt", twitterIcon],
    ["kko", kakaoIcon],
    ["lk", linkIcon],
    ["nv", naverIcon],
  ]);

  return (
    <div id={id} onClick={clickAction}>
      <img src={src.get(id)} alt={altTxt} className="linkbtn" />
    </div>
  );
};

export default ShareButton;
