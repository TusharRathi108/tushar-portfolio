import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar } from "./ui/avatar";

const Photo = () => {
  return (
    <div className="h-full w-full flex items-center relative">
      <Avatar className="w-[250px] h-[225px] md:w-[300px] md:h-[300px] xl:w-[458px] xl:h-[448px]">
        <AvatarImage src="src/assets/Profile1-removebg.png"/>
      </Avatar>
    </div>
  );
};

export default Photo;
