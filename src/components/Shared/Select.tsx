type TSelectProps = {
  label: string;
  value?: string;

  dataSet?: any[];
  handleSelect?: (e: any) => void;
};

export const SelectBox = ({
  label,
  handleSelect,
  dataSet,
  value,
}: TSelectProps) => {
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
          onChange={handleSelect}
          value={value}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
        >
          <option selected>Choose a {label}</option>

          {dataSet?.map((count, ind) => {
            return (
              <option value={count.isoCode} key={ind}>
                {count.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};
