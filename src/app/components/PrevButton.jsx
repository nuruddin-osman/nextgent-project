import { LeftArrow } from "./icons/LeftArrow";

export const PrevButton = () => {
  return (
    <div
      className={`custom-prev absolute -bottom-20 right-[12%] -translate-y-1/2 
                   flex items-center justify-center w-12 h-12 
                   rounded-full cursor-pointer z-80
                    transition-all duration-300 group`}
    >
      <LeftArrow />
    </div>
  );
};
