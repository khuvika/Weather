export const Search = () => {
  return (
    <div>
      {' '}
      <div className="absolute top-8 left-1/10  z-20 w-[300px] sm:w-[400px] md:w-[500px]">
        <input
          type="text"
          placeholder="Search"
          className="w-[400px] px-5 py-3 rounded-full bg-white/80 backdrop-blur-md shadow-md outline-none text-gray-800 placeholder-gray-500"
        />
      </div>
    </div>
  )
}
