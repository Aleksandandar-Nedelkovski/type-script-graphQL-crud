import { Resolver, Mutation, Arg, Int, Query } from "type-graphql";
import { Movie } from "../entity/Movie";

@Resolver()
export class MovieResolver {
  @Mutation(() => Boolean)
  async createMovie(
    @Arg("title") title: string,
    @Arg("minutes", () => Int) minutes: number
  ) {
    await Movie.insert({ title, minutes })
    return true;
  }

  @Query(() => [Movie])
  movies() {
    return Movie.find()
  }
}