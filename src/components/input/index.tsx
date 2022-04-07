import { ChangeEvent, FunctionComponent } from "react";

interface IProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FunctionComponent<IProps> = ({ value, onChange }) => {
  return (
    <div>
      <div className="mt-1 relative rounded-md shadow-sm ">
        <input
          type="text"
          name="text"
          value={value}
          onChange={onChange}
          className=" py-2 my-1 outline-none block w-full pl-7 pr-12 sm:text-sm border border-solid border-gray-400 rounded-md"
          placeholder="space name"
        />
      </div>
    </div>
  );
};

export default Input;
