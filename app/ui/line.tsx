import { RiArrowRightSFill } from "react-icons/ri";

type Props = {
  text: string;
};

export default function Line({ text }: Props) {
  return (
    <div className="w-full px-4 py-2 mx-0 hover:bg-gray-800">
      <div className="flex flex-row items-center">
        <RiArrowRightSFill
          style={{ fontSize: "2em", marginRight: "0.5em", color: "gray" }}
        />
        <p>{text}</p>
      </div>
    </div>
  );
}
