export const Row = ({
  data: {
    name,
    bloodGroup,
    rezusFactor,
    age,
    room,
    diagnosis,
    operation,
    surgeon,
    assistant,
  },
  num,
}) => {
  return (
    <tr>
      <td>{num}</td>
      <td className="tdName">{name}</td>
      <td>
        {bloodGroup}
        {rezusFactor}
      </td>
      <td>{age === 18 ? "" : age}</td>
      <td>{room}</td>
      <td className="tdWide">{diagnosis}</td>
      <td className="tdWide">{operation}</td>
      <td className="tdMiddle">
        {surgeon}
        {assistant === "" ? "" : `/${assistant}`}
      </td>
    </tr>
  );
};
