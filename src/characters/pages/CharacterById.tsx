import { FaCircle } from "react-icons/fa";
import { SingleCharacterSkeletonCard, useSingleCharacter } from "..";
import { useLocation } from "react-router";

export const CharacterById = () => {
  const { pathname } = useLocation();
  const [, , idBuscar] = pathname.split("/");

  const { singleCharacterQuery } = useSingleCharacter(+idBuscar);
  const { data, isLoading } = singleCharacterQuery;

  return (
    <div className="sm:h-100 flex justify-center">
      {isLoading && <SingleCharacterSkeletonCard />}
      {data && (
        <div
          key={data.id}
          className="bg-(--gris-tarjeta) sm:max-w-250 rounded-md flex flex-row flex-nowrap"
        >
          <div className="flex w-1/3 rounded-bl-md rounded-tl-md bg-white overflow-hidden aspect-square">
            <img className="w-full h-full object-cover" src={data.image} />
          </div>
          {/* resto info */}
          <div className="flex-col w-2/3 py-2 px-4">
            <h3 className="w-full text-left font-fredoka text-bold text-2xl text-white font-bold">
              {data.name}
            </h3>

            <p className="text-white text-xs font-medium">
              {" "}
              {data.species} - {data.gender}
            </p>
            <p className="text-orange-400 text-xs font-medium"> {data.type}</p>
            <div className="mt-3 flex flex-row justify-start items-center">
              <FaCircle
                className={`w-2 ${status !== "Dead" ? "text-green-500" : "text-red-700"}`}
              />
              <p className="pl-2 text-white text-s font-medium">
                {" "}
                {data.status}
              </p>
            </div>
            <p className="mt-3 w-full text-(--gris-tarjeta-letras) text-xs font-medium">
              Last Known location:
            </p>
            <p className="mt-1 w-full text-white text-lg font-normal">
              {data.location.name}
            </p>
            <p className="flex mt-3 w-full text-(--gris-tarjeta-letras)  text-xs font-medium items-start">
              First seen in:
            </p>
            <p className="mt-1 w-full text-white text-lg font-normal">
              {data.origin.name}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
