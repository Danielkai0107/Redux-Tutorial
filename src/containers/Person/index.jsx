import React from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';
import { nanoid } from 'nanoid';
import { addPerson } from '../../redux/actions/person';

const Person = ({ personObj, addPerson, count }) => {
  const nameNode = useRef(undefined);
  const ageNode = useRef(undefined);
  const handleAddPerson = () => {
    const name = nameNode.current.value;
    const age = ageNode.current.value;
    const Obj = { id: nanoid(), name, age };
    if (name && age) {
      addPerson(Obj);
      nameNode.current.value = '';
      ageNode.current.value = '';
    }
  };
  return (
    <div>
      <h1>Person Component</h1>
      <p>Count Component current count : {count}</p>
      <input ref={nameNode} type="text" placeholder="輸入人名" />
      &nbsp;
      <input ref={ageNode} type="number" placeholder="輸入年齡" />
      &nbsp;
      <button onClick={handleAddPerson}>ADD</button>
      <ul>
        {personObj.map((item) => (
          <li key={item.id}>
            {item.name}---{item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default connect(
  (state) => ({
    personObj: state.person,
    count: state.count,
  }),
  {
    addPerson,
  },
)(Person);
