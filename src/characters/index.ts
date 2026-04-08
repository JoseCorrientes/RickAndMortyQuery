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
export { useSingleCharacter } from "./hooks/useSingleCharacter";
export { NavigationButtons } from "./components/NavigationButtons";
export { UseFavorites } from "./hooks/useFavorites";

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
export { CharacterById } from "./pages/CharacterById";
export { CharacterSkeletonList } from "./components/CharacterSkeletonList";
export { CharacterSkeletonCard } from "./components/CharacterSkeletonCard";
export { SingleCharacterSkeletonCard } from "./components/SingleCharacterSkeletonCard";

//services-Actions
export * as charactersActions from "./services/actions";
export * as favoriteActions from "./services/storageActions";
