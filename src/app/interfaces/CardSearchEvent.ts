interface CardSearchEvent {
    text: string;
    orderByName: string;
    orderByNumber: string;
    banned: boolean;
    originalPokemon: boolean;
}

export default CardSearchEvent;
