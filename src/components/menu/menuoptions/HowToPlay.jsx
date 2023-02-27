import React from "react";

const HowToPlay = ({ goBack }) => {
  return (
    <div className="d-flex justify-content-center flex-column">
      <div className="description">
        <p>
          Here is a table of cells. There is a number hidden in each of them. In
          one move, you can reveal two digits. If the numbers turn out to be
          different, they will disappear again, and if both open cells have the
          same number, then these cells will disappear. The game will be over
          when you open all the cells. Your task is to do it as quickly as
          possible.
        </p>
      </div>
      <button className="menu-btn mt-2" onClick={goBack}>
        Back
      </button>
    </div>
  );
};

export default HowToPlay;
