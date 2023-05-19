import { useState } from "react";

import "./Switch.scss";

const Switch = () => {
  const [enabled, setEnabled] = useState(false);
  const onClick = () => {
    setEnabled(!enabled);
  };

  return (
    <div onClick={onClick} className={"switch-container-x"}>
      <div onClick={onClick} className={"switch-container-x__wrapper"}>
        <input type="checkbox" checked={enabled} readOnly onClick={onClick} />
        <div
          aria-checked={enabled}
          onClick={onClick}
          className="switch-container-x__wrapper__holder"
        ></div>
      </div>
    </div>
  );
};

export default Switch;
