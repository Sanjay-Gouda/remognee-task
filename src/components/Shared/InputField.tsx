type TInputProps = {
  type: string;
  placeholder: string;
  label: string;
  name?: string;
  value?: string;
  handleChange?: (e: any) => void;
};

export const InputField = ({
  label,
  name,
  value,
  type,
  placeholder,
  handleChange,
}: TInputProps) => {
  return (
    <>
      <div className="flex w-full flex-col justify-start items-start">
        <label className="block mb-2 text-base font-medium text-gray-900 ">
          {label}
        </label>
        <input
          type={type}
          value={value}
          onChange={handleChange}
          name={name}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};
