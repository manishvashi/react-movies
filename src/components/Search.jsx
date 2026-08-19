import { useEffect, useRef } from 'react';

function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useEffect(
    function () {
      function callback(e) {
        if (document.activeElement === inputEl.current) return;

        if (e.code === 'Enter') {
          inputEl.current.focus();
          setQuery('');
        }
      }

      document.addEventListener('keydown', callback);
      return () => document.addEventListener('keydown', callback);
    },
    [setQuery]
  );
  return (
    <input
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      ref={inputEl}
      className="w-full max-w-md px-4 py-2 rounded-full bg-gray-700 text-white placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-indigo-500"
    />
  );
}
export { Search };
