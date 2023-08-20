export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="stat-title">{title}</h2>

      <ul className="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <li className="stat-item" key={id}>
            <span className="stat-label">{label}</span>
            <span className="stat-percentage">{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
