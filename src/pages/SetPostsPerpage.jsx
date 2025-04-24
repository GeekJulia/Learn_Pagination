const SetPostsPerpage = ({setPostsPerPage,setCurrentPage}) => {
    const handleChange = (e) => {
        const value = parseInt(e.target.value);
        setPostsPerPage(value)
        setCurrentPage(1)
    }
  return (
    <div>
      <label htmlFor="cryptopage">
        <select id="cryptopage" name="cryptopage" onChange={handleChange} defaultValue="8">
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="8">8</option>
            <option value="10">10</option>
        </select>
      </label>
    </div>
  )
}

export default SetPostsPerpage
