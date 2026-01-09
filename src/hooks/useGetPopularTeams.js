import { laligaTeams } from "../data/laliga.js";

export default function useGetPopularTeams() {

    const popularTeams = laligaTeams;

    return { popularTeams }
}