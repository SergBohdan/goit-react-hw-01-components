export const Friends = ({ friends }) => {
  return (
    <div>
      {friends.map(({ avatar, name, isOnline, id }) => (
      <li className="item" key={id}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    ))}
    </div>
  );
};
