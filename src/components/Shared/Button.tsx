type TButtonProps = {
  hadleClick?: () => void;
};

export const Button = ({ hadleClick }: TButtonProps) => {
  return (
    <>
      <button
        onClick={hadleClick}
        className="bg-blue-500 w-full  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Sign Up
      </button>
    </>
  );
};
