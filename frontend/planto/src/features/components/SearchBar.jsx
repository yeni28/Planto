import React, {useState} from 'react'


function SearchBar() {
  const [search, setSearch] = useState("");
  const onChange = (e) =>{
    setSearch(e.target.value)
  }

  

  return (
    <div>
        <h1>안녕 나는 검색바야</h1>
        <input type="text" value={search} onChange={onChange} />
    </div>

  )
}

export default SearchBar