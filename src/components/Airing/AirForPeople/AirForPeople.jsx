import React, { useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import '../../DivisionForm/DivisionForm.sass';

const AirForPeople = ({ setAirForPeopleForRes }) => {
  const [airForPeople, setAirForPeople] = useState({
    n: '',
  });
  const [airForPeopleResult, setAirForPeopleResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setAirForPeople({ ...airForPeople, [name]: value });
  };

  const calcAirForPeople = () => {
    return 6 * airForPeople.n + ' (м3/мин)';
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setAirForPeopleResult(calcAirForPeople());
    setAirForPeopleForRes(calcAirForPeople());
  };

  return (
    <DivisionForm
      id="20"
      title="Необходимое количество воздуха по наибольшему числу людей"
      name="airForPeople"
      onSubmit={handleSubmitForm}
      result={airForPeopleResult}
    >
      <div className="division-label">
        <h3 className="division-text">n - наибольшее количество людей</h3>
        <input
          value={airForPeople.n}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="n"
          name="n"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default AirForPeople;
