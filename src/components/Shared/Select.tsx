type TSelectProps = {
  label: string;
};

export const SelectBox = ({ label }: TSelectProps) => {
  return (
    <>
      <div className="flex flex-col w-full justify-start items-start">
        <label
          htmlFor="countries"
          className="block mb-2 text-base font-medium text-gray-900 "
        >
          {label}
        </label>
        <select
          id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option selected>Choose a country</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </>
  );
};
