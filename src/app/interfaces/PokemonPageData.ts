import PokemonCard from "./PokemonCard";

interface PokemonPageData {
    page: number;
    pageSize: number;
    totalCount: number;
    data: PokemonCard[];
    count: number;
}

export default PokemonPageData;
