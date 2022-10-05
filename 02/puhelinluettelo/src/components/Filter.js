const Filter = ({newSearch, handleSearch }) => {
  return (
    <form onSubmit={handleSearch}>
      filter shown with <input value={newSearch}
      onChange={handleSearch}
      />
    </form>
  )}

  export default Filter