import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components";
import { ButtonGradient } from "../components";
import PageNotFoundImg from "../assets/pageNotFoundImg.jpg"; 

export const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found / CineMate"
  })
  return (
    <main>
      <section className="flex flex-col justify-center">
        <div className="flex flex-col items-center ">
          <p className="text-7xl text-gray-900 my-3 font-medium">404 Oops!</p>
          <div className="max-w-lg">
            <img src={PageNotFoundImg} alt="404 Page Not Found" />
          </div>
        </div>
        <div className="flex justify-center">
          <Link to="/">
            <ButtonGradient>Back To CineMate</ButtonGradient>
          </Link>
          <Link to="/movies/upcoming">
            <Button>Back To Upcoming</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
