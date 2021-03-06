import Table from "react-bootstrap/Table";

export default function Tabledata({ characterList }) {
  return (
    <>
      <Table striped bordered hover className="project--table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Height</th>
            <th>Mass</th>
            <th>HomeWorld</th>
            <th>Species</th>
          </tr>
        </thead>
        <tbody>
          {characterList.map((character) => (
            <tr key={character.name}>
              <td>{character.name}</td>
              <td>{character.birth_year}</td>
              <td>{character.height}</td>
              <td>{character.mass}</td>
              <td>{character.homeworld}</td>
              <td>{character.species}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
