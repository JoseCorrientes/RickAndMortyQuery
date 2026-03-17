//api
export { charactersApi } from "./api/charactersApi";

//assets
export * from "./assets/RickAndMortyTitle.png";

//components
export { SearchBar } from "./components/SearchBar";
export { CharacterGrid } from "./components/CharacterGrid";
export { NavBar } from "./components/NavBar";

//hooks
export { useCharacters } from "./hooks/useCharacters";

//interfaces
export {
  type Gender,
  type Character,
  type CharactersPage,
  type Status,
  type Species,
  type Location,
} from "./interfaces/characterInterfaces";

//pages
export { CharactersList } from "./pages/CharactersList";
export { CharacterCard } from "./components/CharacterCard";
export { CharactersAlienList } from "./pages/CharactersAlienList";
export { CharactersHumanList } from "./pages/CharactersHumanList";
export { CharacterById } from "./pages/CharacterById";
export { CharacterSkeletonList } from "./pages/CharacterSkeletonList";
export { CharacterSkeletonCard } from "./components/CharacterSkeletonCard";

//services-Actions
export * as charactersActions from "./services/actions";
