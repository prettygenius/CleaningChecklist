function SearchItem({search,setSearch}) {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input id="search" type="search" role="searchbox" 
        value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search List"/>
    </form>
  )
}

export default SearchItem