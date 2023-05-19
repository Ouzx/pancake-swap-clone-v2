import React, { useState, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Button from "../Button/Button";
import Switch from "../Switch/Switch";

import "./Settings.scss";

export const openSettings = () => {
  const settings = document.querySelector(".settings-container");
  settings?.classList.add("settings-active");
};

const Settings = () => {
  const [activeButton, setActiveButton] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeSettings();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const closeSettings = () => {
    const settings = document.querySelector(".settings-container");
    settings?.classList.remove("settings-active");
  };

  return (
    <div
      className="settings-container"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div className="settings-wrapper" ref={menuRef}>
        <div className="title">
          <span>Settings</span>
          <button onClick={closeSettings}>
            <RxCross2 size={18} />
          </button>
        </div>

        <div className="content">
          <p>GLOBAL</p>

          <div className="settings-section">
            <span>Dark mode</span>
            <ThemeSwitch />
          </div>

          <div className="settings-section">
            <span>
              Subgraph Health Indicator <AiOutlineQuestionCircle />
            </span>
            <Switch />
          </div>

          <div className="settings-section">
            <span>
              Show username <AiOutlineQuestionCircle />
            </span>
            <Switch />
          </div>
          <div className="settings-section">
            <span>
              Token Risk Scanning <AiOutlineQuestionCircle />
            </span>
            <Switch />
          </div>
          <div className="settings-last">
            <span>
              Default Transaction Speed (GWEI) <AiOutlineQuestionCircle />
            </span>
            <div className="buttons">
              <button
                className={`${activeButton === 0 && "button-active"}`}
                onClick={() => {
                  setActiveButton(0);
                }}
              >
                Default
              </button>
              <button
                className={`${activeButton === 1 && "button-active"}`}
                onClick={() => {
                  setActiveButton(1);
                }}
              >
                Standart (3)
              </button>
              <button
                className={`${activeButton === 2 && "button-active"}`}
                onClick={() => {
                  setActiveButton(2);
                }}
              >
                Fast (4)
              </button>
              <button
                className={`${activeButton === 3 && "button-active"}`}
                onClick={() => {
                  setActiveButton(3);
                }}
              >
                Instant (5)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
