
import { GenreResponseProps } from "../utils/GenreResponseProps";
import { MovieProps } from "../utils/MovieProps";
import { MovieCard } from "./MovieCard";


interface MovieContentProps {
  movies: MovieProps[],
  selectedGenre: GenreResponseProps,
}

export function Content({movies}: MovieContentProps) {

  return(

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>

  )
}