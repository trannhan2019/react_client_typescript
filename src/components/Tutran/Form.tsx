import React, { useState } from 'react';

import '../../css/Form.css';

interface Props {
  people: {
    name: string;
    age: number;
    bio: string;
  }[];
}

interface IProps {
  people: Props['people'];
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>;
}

const Form = ({ people, setPeople }: IProps) => {
  const [inputData, setInputData] = useState({
    name: '',
    age: '',
    bio: '',
  });
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    setPeople([
      ...people,
      {
        name: inputData.name,
        age: Number(inputData.age),
        bio: inputData.bio,
      },
    ]);
    setInputData({ name: '', age: '', bio: '' });
  };
  return (
    <div className="form-container">
      <h1>Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(e);
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={inputData.name}
          onChange={(e) => onChange(e)}
        />
        <input
          type="number"
          name="age"
          placeholder="Enter age"
          value={inputData.age}
          onChange={(e) => onChange(e)}
        />
        <textarea
          name="bio"
          id="bio"
          placeholder="Bio Description"
          value={inputData.bio}
          onChange={(e) => onChange(e)}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
