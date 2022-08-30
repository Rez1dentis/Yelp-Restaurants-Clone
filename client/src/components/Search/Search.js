import React, { useState } from 'react';

function Search() {
  const [input, setInput] = useState('');
  return (
    <div>
      <h4>
        Search
      </h4>
      <input value={input} placeholder="User Search ..." onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default Search;
