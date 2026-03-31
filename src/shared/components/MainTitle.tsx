interface Props {
  name: string;
  color: string;
}

export const MainTitle = ({ name, color }: Props) => {
  return (
    <div
      className={`font-fredoka font-bold text-6xl mt-6 mb-6  w-full text-center text-${color}`}
    >
      {name}
    </div>
  );
};
