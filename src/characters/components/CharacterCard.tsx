import { FaCircle } from "react-icons/fa";
import {
  type Gender,
  type Species,
  type Status,
  type Location,
  charactersActions,
} from "..";
import { Link } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

interface Props {
  id: number;
  image: string;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  //   episode: string[];
  //   url: string;
  //   created: string;
}

export const CharacterCard = ({
  id,
  image,
  name,
  species,
  status,
  location,
  origin,
  gender,
  type,
}: Props) => {
  const queryClient = useQueryClient();

  const handlePrefetchCharacter = (id: number) => {
    charactersActions.prefetchSingleCharacter(queryClient, id);
  };

  return (
    <Link
      to={`/character/${id}`}
      onMouseEnter={() => handlePrefetchCharacter(id)}
    >
      <div
        key={id}
        className="bg-(--gris-tarjeta) rounded-md shadow-md flex flex-row flex-nowrap justify-start shrink-0 h-full hover:shadow-lg hover:shadow-amber-700 hover:border-2 hover:border-amber-700"
      >
        <div className="flex w-1/3 h-full rounded-bl-md rounded-tl-md bg-white overflow-hidden aspect-square">
          <img className="w-full h-full object-cover" src={image} />
        </div>
        {/* resto info */}
        <div className="flex-col w-2/3 py-2 px-4">
          <h3 className="w-full text-left font-fredoka text-bold text-2xl text-white font-bold">
            {name}
          </h3>

          <p className="text-white text-xs font-medium">
            {" "}
            {species} - {gender}
          </p>
          <p className="text-orange-400 text-xs font-medium"> {type}</p>
          <div className="mt-3 flex flex-row justify-start items-center">
            <FaCircle
              className={`w-2 ${status !== "Dead" ? "text-green-500" : "text-red-700"}`}
            />
            <p className="pl-2 text-white text-s font-medium"> {status}</p>
          </div>
          <p className="mt-3 w-full text-(--gris-tarjeta-letras) text-xs font-medium">
            Last Known location:
          </p>
          <p className="mt-1 w-full text-white text-lg font-normal">
            {location.name}
          </p>
          <p className="flex mt-3 w-full text-(--gris-tarjeta-letras)  text-xs font-medium items-start">
            First seen in:
          </p>
          <p className="mt-1 w-full text-white text-lg font-normal">
            {origin.name}
          </p>
        </div>
      </div>
    </Link>
  );
};
