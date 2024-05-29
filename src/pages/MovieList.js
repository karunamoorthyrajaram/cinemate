import { useFetch } from "../hooks/useFetch";
import { useEffect } from "react";
import { Cards } from "../components";


export const MovieList = ({apiPath, title}) => {
  const {data: movies} = useFetch(apiPath);  

  useEffect(() => {
    document.title = `${title} / CineMate`
  })

  return (
    <main>
      <section className="max-w-9xl min-h-full mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies && movies.map((movies) => (
            < Cards key={movies.id} movie={movies} />
          ))}
        </div>
      </section>
    </main>
  )
}
