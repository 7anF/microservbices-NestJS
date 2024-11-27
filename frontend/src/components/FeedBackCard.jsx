import { quotes } from "../assets";

const FeedBackCard = ({ profileImg, username, nickname, title }) => {
  return (
    <div>
      <div
        className="flex justify-between flex-col px-10 py-12 rounded-[20px]
            max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"
      >
        <img src={quotes} alt="quotes" className="w-[42px] h-[27px]" />
        <p
          className="font-poppins font-normal text-[18px] leading-[32px]
                text-white my-10"
        >
          {title}
        </p>
        <div className="flex flex-row">
          <img
            src={profileImg}
            alt="profile"
            className="w-[48px] h-[48px] rounded-full"
          />
          <div className="flex flex-col ml-4">
            <h4
              className="font-poppins font-semibold text-[20px] leading-[32px]
            text-white"
            >
              {username}
            </h4>
            <p
              className="font-poppins font-normal text-[16px] leading-[24px]
            text-dimWhite"
            >
              {nickname}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
