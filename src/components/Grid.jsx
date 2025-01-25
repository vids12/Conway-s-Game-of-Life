export const Grid = ({ grid }) => {
  return grid.map((rows, i) => {
    return (
      <section key={i} className="grid">
        {rows.map((col, j) => (
          <div
            key={`${i}${j}`}
            className="grid-col"
            style={{
              backgroundColor: grid[i][j] ? "#48A6A7" : "#9ACBD0",
            }}
          ></div>
        ))}
      </section>
    );
  });
};
