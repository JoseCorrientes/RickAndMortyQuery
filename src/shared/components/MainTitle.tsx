interface Props {
  name: string;
  color: string;
}

export const MainTitle = ({ name, color }: Props) => {
  return (
    <div
      className={`font-fredoka font-bold text-4xl sm:text-6xl  mb-4 mt-4 sm:mt-6 sm:mb-6  w-full text-center text-${color}`}
    >
      {name}
    </div>
  );
};
