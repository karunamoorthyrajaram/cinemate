import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { Cards } from "../components";
import { PageNotFound } from "../pages";

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const {data: movies} = useFetch(apiPath, queryTerm);  

  useEffect(() => {
    document.title = `Search result for ${queryTerm} / CineMate`
  })

  return (
    <main>
      <section className="py-7">
        <p className="text-3xl">{movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto py-3">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.length === 0 ? < PageNotFound /> : movies && movies.map((movies) => (
            < Cards key={movies.id} movie={movies} />
          ))}
        </div>
      </section>
    </main>
  )
}
