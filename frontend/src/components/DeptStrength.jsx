import { useState, useEffect } from "react";

const NumberLoader = ({ target }) => {
  const duration = 3000;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target <= 0) return;
    let stepTime = duration / target;
    let current = 0;
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        setCount(current);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
};

const DeptStrength = () => {
  const data = [
    { label: "Professors", value: 30 },
    { label: "Associate Professors", value: 17 },
    { label: "Sr. Assistant Professors", value: 16 },
    { label: "Assistant Professors", value: 34 },
    { label: "Programmers and Admins", value: 10 },
    { label: "DTP's", value: 3 },
  ];

  return (
    <section className="deptStrengthSection">
      <div className="deptStrengthSectionDivs">
        <div className="sHeading">
          <p>Department Strength</p>
        </div>
        <div className="deptStrengthContainer">
          {data.map((item, index) => (
            <div key={index} className="container">
              <div className="container_terminal"></div>
              <div className="terminal_toolbar">
                <div className="butt">
                  <button className="btn btn-color"></button>
                  <button className="btn"></button>
                  <button className="btn"></button>
                </div>
                <p className="user">cvr@admin: ~</p>
              </div>
              <div className="terminal_body">
                <div className="terminal_promt">
                  <span className="terminal_user">cvr@admin:</span>
                  <span className="terminal_location">~</span>
                  <span className="terminal_bling">$</span>
                  <span className="terminal_cursor"></span>
                </div>
                <div className="text-center text-white mt-2">
                  <NumberLoader target={item.value} />
                  <p>{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeptStrength;
