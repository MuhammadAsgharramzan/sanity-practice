const SearchBar = () => {
  return (
    <div>

    <div className="flex items-center justify-center bg-orange-400 mx-auto p-2 rounded-sm">
      <input className=" rounded-lg p-1 bg-slate-100 hover:bg-white" type="text" placeholder="Search your Products..." />
    </div>

    </div>
  );
};

export default SearchBar;