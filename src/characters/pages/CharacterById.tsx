import { FaCircle } from "react-icons/fa";

export const CharacterById = () => {
  const character = {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    type: "",
    gender: "Male",
    origin: {
      name: "unknown",
      url: "",
    },
    location: {
      name: "Citadel of Ricks",
      url: "https://rickandmortyapi.com/api/location/3",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    episode: [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      "https://rickandmortyapi.com/api/episode/3",
      "https://rickandmortyapi.com/api/episode/4",
      "https://rickandmortyapi.com/api/episode/5",
      "https://rickandmortyapi.com/api/episode/6",
      "https://rickandmortyapi.com/api/episode/7",
      "https://rickandmortyapi.com/api/episode/8",
      "https://rickandmortyapi.com/api/episode/9",
      "https://rickandmortyapi.com/api/episode/10",
      "https://rickandmortyapi.com/api/episode/11",
      "https://rickandmortyapi.com/api/episode/12",
      "https://rickandmortyapi.com/api/episode/13",
      "https://rickandmortyapi.com/api/episode/14",
      "https://rickandmortyapi.com/api/episode/15",
      "https://rickandmortyapi.com/api/episode/16",
      "https://rickandmortyapi.com/api/episode/17",
      "https://rickandmortyapi.com/api/episode/18",
      "https://rickandmortyapi.com/api/episode/19",
      "https://rickandmortyapi.com/api/episode/20",
      "https://rickandmortyapi.com/api/episode/21",
      "https://rickandmortyapi.com/api/episode/22",
      "https://rickandmortyapi.com/api/episode/23",
      "https://rickandmortyapi.com/api/episode/24",
      "https://rickandmortyapi.com/api/episode/25",
      "https://rickandmortyapi.com/api/episode/26",
      "https://rickandmortyapi.com/api/episode/27",
      "https://rickandmortyapi.com/api/episode/28",
      "https://rickandmortyapi.com/api/episode/29",
      "https://rickandmortyapi.com/api/episode/30",
      "https://rickandmortyapi.com/api/episode/31",
      "https://rickandmortyapi.com/api/episode/32",
      "https://rickandmortyapi.com/api/episode/33",
      "https://rickandmortyapi.com/api/episode/34",
      "https://rickandmortyapi.com/api/episode/35",
      "https://rickandmortyapi.com/api/episode/36",
      "https://rickandmortyapi.com/api/episode/37",
      "https://rickandmortyapi.com/api/episode/38",
      "https://rickandmortyapi.com/api/episode/39",
      "https://rickandmortyapi.com/api/episode/40",
      "https://rickandmortyapi.com/api/episode/41",
      "https://rickandmortyapi.com/api/episode/42",
      "https://rickandmortyapi.com/api/episode/43",
      "https://rickandmortyapi.com/api/episode/44",
      "https://rickandmortyapi.com/api/episode/45",
      "https://rickandmortyapi.com/api/episode/46",
      "https://rickandmortyapi.com/api/episode/47",
      "https://rickandmortyapi.com/api/episode/48",
      "https://rickandmortyapi.com/api/episode/49",
      "https://rickandmortyapi.com/api/episode/50",
      "https://rickandmortyapi.com/api/episode/51",
    ],
    url: "https://rickandmortyapi.com/api/character/2",
    created: "2017-11-04T18:50:21.651Z",
  };

  const { id, gender, image, origin, species, name, type, location, status } =
    character;

  return (
    <div className="sm:h-100 flex justify-center">
      <div
        key={id}
        className="bg-(--gris-tarjeta) sm:max-w-250 rounded-md flex flex-row flex-nowrap shrink-0 hover:shadow-lg hover:shadow-amber-700"
      >
        <div className="flex w-1/3 rounded-bl-md rounded-tl-md bg-white overflow-hidden aspect-square">
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
    </div>
  );
};
