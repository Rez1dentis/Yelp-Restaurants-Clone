import React, { useState } from 'react';

function Search() {
  const [input, setInput] = useState('');
  return (
    <div className="search">
      <input className="search-input" value={input} placeholder="Поиск..." onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default Search;
