import React from 'react';

const Display = ({ closed, locked }) => {
  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;

  return (
    <div className="display panel">
      <div data-testid = "locked-class" className={lockedClass}>{locked ? 'Locked' : 'Unlocked'}</div>
      <div data-testid = "closed-class" className={closedClass}>{closed ? 'Closed' : 'Open'}</div>
    </div>
  );
};

Display.defaultProps = {
  closed: false,
  locked: false,
};

export default Display;
