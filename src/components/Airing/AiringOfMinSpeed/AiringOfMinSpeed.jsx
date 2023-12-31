import React, { useEffect, useState } from 'react';
import DivisionForm from '../../DivisionForm/DivisionForm';
import '../../DivisionForm/DivisionForm.sass';

const AiringOfMinSpeed = ({ setAiringOfMinSpeedForRes, scv }) => {
  const [airingOfMinSpeed, setAiringOfMinSpeed] = useState({
    Vmin: '',
    Scv: '',
  });
  const [airingOfMinSpeedResult, setAiringOfMinSpeedResult] = useState('');

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setAiringOfMinSpeed({ ...airingOfMinSpeed, [name]: value });
  };

  const calcAiringOfMinSpeed = () => {
    return (60 * airingOfMinSpeed.Vmin * airingOfMinSpeed.Scv).toFixed(1);
  };

  useEffect(() => {
    setAiringOfMinSpeed({ ...airingOfMinSpeed }, (airingOfMinSpeed.Scv = scv));
  }, [scv]);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setAiringOfMinSpeedResult(calcAiringOfMinSpeed() + ' (м3/мин)');
    setAiringOfMinSpeedForRes(calcAiringOfMinSpeed());
  };

  return (
    <DivisionForm
      id="21"
      title="Количество воздуха по минимальной скорости движения воздуха"
      name="airingOfMinSpeed"
      onSubmit={handleSubmitForm}
      result={airingOfMinSpeedResult}
    >
      <div className="division-label">
        <h3 className="division-text">
          V<sub>min</sub> - общий расход воздуха по минимальной скорости
          движения воздуха, м/с
        </h3>
        <input
          value={airingOfMinSpeed.Vmin}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Vmin"
          name="Vmin"
          required
        />
      </div>
      <div className="division-label">
        <h3 className="division-text">
          S<sub>св</sub> - площадь выработки в свету, м<sup>3</sup>
        </h3>
        <input
          value={airingOfMinSpeed.Scv}
          onChange={handleInputChange}
          type="text"
          className="division-input"
          id="Scv"
          name="Scv"
          maxLength="200"
          required
        />
      </div>
    </DivisionForm>
  );
};

export default AiringOfMinSpeed;
