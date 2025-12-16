import React from 'react';
import './Gauge.css';

interface GaugeProps {
  score: number;
}

export const Gauge: React.FC<GaugeProps> = ({ score }) => {
  const normalizedScore = Math.max(-100, Math.min(100, score));
  const percentage = ((normalizedScore + 100) / 200) * 100;
  const rotation = (percentage / 100) * 180 - 90;

  return (
    <div className="lib-gauge">
      <div className="lib-gauge-container">
        <div className="lib-gauge-arc">
          <div
            className="lib-gauge-fill"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          />
        </div>
        <div className="lib-gauge-center">
          <div className="lib-gauge-score">{score}</div>
          <div className="lib-gauge-label">Vibe Score</div>
        </div>
      </div>
    </div>
  );
};


