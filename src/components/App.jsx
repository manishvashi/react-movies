import { useState } from 'react';

export default function App() {
  const [query, setQuery] = useState('');
  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <TotalMovies count={tempMovieData.length} />
      </NavBar>
    </>
  );
}
