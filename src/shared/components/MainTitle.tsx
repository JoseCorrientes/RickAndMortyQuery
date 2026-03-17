interface Props {
  name: string;
}

export const MainTitle = ({ name }: Props) => {
  return (
    <div className="font-fredoka font-bold text-6xl mt-6 mb-6  w-full text-center text-white">
      {name}
    </div>
  );
};
