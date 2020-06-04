import React from 'react';
import './WaitingList.css';

const WaitingItem = ({ text, entered, onEnter, onLeave }) => {
  return (
    <li>
      <div className={`text ${entered ? 'entered' : ''}`}>{text}</div>
      <div className="buttons">
        <button onClick={onEnter}>입장</button>
        <button onClick={onLeave}>나감</button>
      </div>
    </li>
  );
};

const WaitingList = ({ input, waitingList, onChange, onSubmit, onEnter, onLeave }) => {

  const waitingItems = waitingLsit.map(item => (
    <waitingItems
      key={item.id}
      text={item.text}
      entered={item.entered}
      id={item.id}
      onEnter={() => onEnter(item.id)}
      onLeave={() => onLeave(item.id)}
    />
  ))

  return (
    <div className="WaitingList">
      <h2>대기자 명단</h2>
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onChange} />
        <button>등록</button>
      </form>
      <ul>
        {waitingItems}
      </ul>
    </div>
  );
};

export default WaitingList;
