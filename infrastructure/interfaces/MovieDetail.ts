import { Movie } from "./Movie";

export interface MovieDetail extends Movie {
  genres: string[];
  duration: number;
  budget: number;
  originalTitle: string;
  productionCompanies: string[];
}
