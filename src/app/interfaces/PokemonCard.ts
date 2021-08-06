export interface CardImages {
    small: string;
    large: string;
}

export interface CardSet {
    id: string;
    name: string;
    series: string;
    total: number;
}
export interface TsgPlayer {
    url: string;
    updatedAt: string;
}
interface PokemonCard {
    id: string;
    name: string;
    artist: string;
    number: string;
    images: CardImages;
    rarity: string;
    flavorText: string;
    level: string;
    set: CardSet;
    types: string[];
    nationalPokedexNumbers: number[];
}

export default PokemonCard;
