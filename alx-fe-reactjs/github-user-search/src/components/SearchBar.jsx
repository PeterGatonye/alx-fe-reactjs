export default function SearchBar() {
  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Search GitHub user..."
        style={{ padding: "8px", width: "250px", marginRight: "8px" }}
      />
      <button style={{ padding: "8px 16px" }}>Search</button>
    </div>
  );
}
