import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";

const ContactContainer = () => {
  return (
    <div className="flex justify-between gap-5 xl:w-auto rounded-md mx-4 my-2 py-4 xl:px-4 hover:bg-neutral-800">
      <div className="flex gap-3">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <h1 className="line-clamp-1 select-none">Mohamad Kaif Shaikhfromfaizabaduttarpradesh</h1>
          <p className="text-neutral-400 text-sm select-none">recent message</p>
        </div>
      </div>
      <div className="">
        <p className="text-neutral-400 text-sm select-none">yesterdy</p>
      </div>
    </div>
  );
};

export default ContactContainer;
