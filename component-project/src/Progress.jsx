import { useState } from 'react';

const Progress = () => {
  const [progress, setProgress] = useState(50);

  const handleClick = () => {
    if (progress === 50) {
      setProgress(100);
    } else {
      setProgress(50);
    }
  };

  return (
    <div>
      <p>Progress: {progress}%</p>
      <div
        className="progress-bar"
        style={{ width: '200px', height: '20px', backgroundColor: '#ccc', cursor: 'pointer' }}
        onClick={handleClick}
      >
        <div
          className="progress"
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#0f0',
            transition: 'width 0.5s ease',
          }}
        />
      </div>
    </div>
  );
};

export default Progress;
