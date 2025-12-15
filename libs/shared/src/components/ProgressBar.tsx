import React from 'react';
import './ProgressBar.css';

interface ProgressBarProps {
  label: string;
  value: number;
  color: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ label, value, color }) => {
  return (
    <div className="lib-progress-bar">
      <div className="lib-progress-bar-label">{label}</div>
      <div className="lib-progress-bar-container">
        <div
          className="lib-progress-bar-fill"
          style={{
            width: `${value}%`,
            backgroundColor: color,
          }}
        />
      </div>
      <div className="lib-progress-bar-value">{value}%</div>
    </div>
  );
};

