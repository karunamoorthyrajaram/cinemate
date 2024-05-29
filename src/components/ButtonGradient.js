
export const ButtonGradient = ({children}) => {
  return (
    <button className="rounded-lg mx-2 text-white bg-gradient-to-r from-green-900 from-10% via-lime-500 via-30% to-yellow-900 to-90% hover:bg-gradient-to-bl px-5 py-2.5">{children}</button>
  )
}
