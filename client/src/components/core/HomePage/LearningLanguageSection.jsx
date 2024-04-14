import HighlightText from "./HighlightText";
import CTAButton from "../../../components/core/HomePage/Button";
import Know_your_progress from "../../../assets/Images/Know_your_progress.png";
import Compare_with_others from "../../../assets/Images/Compare_with_others.svg";
import Plan_your_lessons from "../../../assets/Images/Plan_your_lessons.svg";
const LearningLanguageSection = () => {
  return (
    <div className="mt-[130px] ">
      <div className="flex flex-col gap-5">
        <div className="text-4xl text-center items-center font-semibold">
          Your swiss knife for <HighlightText text={"learning any language"} />
        </div>
        <div className="text-center mx-auto text-richblack-600 text-base w-[70%] ">
          sing spin making learning multiple languages easy. with 20+ languages
          realistic voice-over, progress tracking, custom schedule and more.
        </div>
        <div className="flex mt-5 items-center">
          <img
            src={Know_your_progress}
            alt="img"
            className="object-contain -mr-32 "
          />
          <img src={Compare_with_others} alt="img" className="object-contain" />
          <img
            src={Plan_your_lessons}
            alt="img"
            className="object-contain -ml-32 "
          />
        </div>
        <div className="mx-auto hover:scale-95">
          <CTAButton active={true} linkto="/login">
            Learn more
          </CTAButton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
