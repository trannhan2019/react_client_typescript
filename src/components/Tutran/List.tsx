//import { Istate as IProps } from "../../App";
import '../../css/List.css';

interface IProps {
  people: {
    name: string;
    age: number;
    bio: string;
  }[];
}

const List = ({ people }: IProps) => {
  const renderPeople = (): JSX.Element[] =>
    people.map((person, idx) => {
      return (
        <div className="list-item-container" key={idx}>
          {person.name} - {person.age} - {person.bio}
        </div>
      );
    });
  return (
    <div className="list-container">
      <h1>List</h1>
      {renderPeople()}
    </div>
  );
};

export default List;
