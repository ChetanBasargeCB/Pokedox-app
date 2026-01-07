export function SearchFild({ value, setSearch }) {
  return (
    <div>
      <div className="flex flex-row   justify-center p-2">
        <div> <img src="src\Projects\Pokemon Fetch\Assests\poko_logo.png" alt="" className="w-30" /></div>
        <h1 className="bg-gradient-to-r from-red-500 to-blue-500 custom_font text-center px-2 rounded-2xl  text-3xl  sm:text-4xl sm:font-bold  sm:p-0 h-10  mt-2  ">Let Catch Pokemon</h1>
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search Pokemon"
          value={value}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white p-2 rounded-[2px]   border-b-5 shadow  outline-2  w-60 sm:w-80"  
        />
      </div>
    </div>
  );
}
