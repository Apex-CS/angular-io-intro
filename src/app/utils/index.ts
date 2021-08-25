import CardSearchData from "../interfaces/CardSearchEvent";

export const trasnformFiltersIntoQueryString = (cardData: CardSearchData): string => {
    const originalPokemon = cardData.originalPokemon ? " nationalPokedexNumbers:[1 TO 151]" : "";
    const sortArr = [];
    const sortByNameOrder = cardData.orderByName === "N/A" ? "" : cardData.orderByName === "ASC" ? "name" : "-name";
    const sortByNumberOrder = cardData.orderByNumber === "N/A" ? "" : cardData.orderByNumber === "ASC" ? "number" : "-number";

    if (sortByNameOrder) {
        sortArr.push(sortByNameOrder);
    }

    if (sortByNumberOrder) {
        sortArr.push(sortByNumberOrder);
    }

    const sortQuery = sortArr.length > 0 ? `&orderBy=${sortArr.join(",")}` : "";

    return `?q=name:${cardData.text}${originalPokemon}${sortQuery}&pageSize=25`;
}