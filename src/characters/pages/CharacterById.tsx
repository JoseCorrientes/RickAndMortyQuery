import { useParams } from "react-router";

export const CharacterById = () => {
  const id = useParams();

  return (
    <div className="max-w-sm rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-hover hover:shadow-md">
      <img
        src={character.image}
        alt={character.name}
        className="h-48 w-full rounded-xl object-cover"
      />
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-800">{character.name}</h3>
          <span
            className={`h-2 w-2 rounded-full ${character.status === "Alive" ? "bg-green-500" : "bg-red-500"}`}
          ></span>
        </div>
        <p className="text-sm text-slate-500">
          {character.species} — {character.status}
        </p>

        <div className="pt-2 border-t border-slate-100">
          <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
            Last known location:
          </p>
          <p className="text-sm text-slate-700">{character.location.name}</p>
        </div>
      </div>
    </div>
  );
};
