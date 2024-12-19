import { useSearch } from "../customHooks";
import { users } from "../data/users";

export default function SearchUser() {
  const { query, setQuery, filteredItems } = useSearch(users, "name");

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
