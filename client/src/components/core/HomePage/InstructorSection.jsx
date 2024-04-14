import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import HighlightText from "./HighlightText";
const InstructorSection = () => {
  return (
    <div className="mt-16">
      <div className="flex gap-20 items-center">
        <div className="w-[50%]">
          <img src={Instructor} alt="" />
        </div>
        <div className="w-[50%] flex flex-col gap-10 ">
          <div className="text-4xl font-bold">
            <p>Become an</p>
            <HighlightText text={"instructor"} />
          </div>
          <div>
            <p className="text-richblack-300 w-[80%] font-semibold">
              Instructors from around the world teach millions of students on
              StudyNotion. We provide the tools and skills to teach what you
              love.
            </p>
          </div>
          <div className="w-fit">
            <CTAButton active={true} linkto={"/signup"}>
              <div className="flex items-center gap-2">
                Explore Full Catalog
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorSection;
