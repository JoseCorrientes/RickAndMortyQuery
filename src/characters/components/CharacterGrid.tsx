import { CharacterCard, type Character } from "..";

interface Props {
  characters?: Character[];
  page: number;
  backSpecies: string;
}
export const CharacterGrid = ({
  characters = [],
  page,
  backSpecies,
}: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 p-4">
      {characters.map((char) => (
        <CharacterCard
          key={char.id}
          id={char.id}
          image={char.image}
          name={char.name}
          species={char.species}
          status={char.status}
          location={char.location}
          origin={char.origin}
          gender={char.gender}
          type={char.type}
          page={page}
          backSpecies={backSpecies}
        />
      ))}
    </div>
  );
};
