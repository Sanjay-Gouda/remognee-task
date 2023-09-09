type TInputProps = {
  type: string;
  placeholder: string;
  label: string;
};

export const InputField = ({ label, type, placeholder }: TInputProps) => {
  return (
    <>
      <div className="flex w-full flex-col justify-start items-start">
        <label
          htmlFor="first_name"
          className="block mb-2 text-base font-medium text-gray-900 "
        >
          {label}
        </label>
        <input
          type={type}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder={placeholder}
          required
        />
      </div>
    </>
  );
};
