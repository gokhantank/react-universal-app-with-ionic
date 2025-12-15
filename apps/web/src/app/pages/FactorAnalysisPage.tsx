import React, { useState, useEffect, useRef } from 'react';
import { TEAMS, teamDataConfig, type Team } from '@heelix-workspace/shared';
import './FactorAnalysis.css';

export default function FactorAnalysisPage() {
  const [selectedTeam, setSelectedTeam] = useState<Team>('Engineering Product');
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const teamData = teamDataConfig[selectedTeam];
  const factors = teamData.factorData;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowTeamDropdown(false);
      }
    };

    if (showTeamDropdown) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showTeamDropdown]);

  const selectTeam = (team: Team) => {
    setSelectedTeam(team);
    setShowTeamDropdown(false);
  };

  return (
    <div className="factor-analysis">
      <div className="factor-analysis__container">
        {/* Header */}
        <h1 className="factor-analysis__header">Factor analysis</h1>

        {/* Filters */}
        <div className="factor-analysis__filters">
          <div className="factor-analysis__filters-dropdown team-dropdown-container" ref={dropdownRef}>
            <button
              className="factor-analysis__filters-dropdown-button"
              onClick={() => setShowTeamDropdown(!showTeamDropdown)}
            >
              <span>{selectedTeam} ▼</span>
            </button>
            {showTeamDropdown && (
              <div className="factor-analysis__filters-dropdown-menu">
                {TEAMS.map((team) => (
                  <button key={team} onClick={() => selectTeam(team)}>
                    <span>{team}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="factor-analysis__filters-period">
            <span>Last 30 days ▼</span>
          </button>
        </div>

        {/* Factor Grid */}
        <div className="factor-analysis__grid">
          {factors.map((factor) => (
            <div key={factor.name} className="factor-analysis__grid-item">
              <div
                className="factor-analysis__grid-item-bar"
                style={{ backgroundColor: factor.color }}
              ></div>
              <div className="factor-analysis__grid-item-name">{factor.name}</div>
              <div className="factor-analysis__grid-item-value">{factor.value}%</div>
              <div className="factor-analysis__grid-item-progress">
                <div
                  className="factor-analysis__grid-item-progress-fill"
                  style={{
                    width: `${factor.value}%`,
                    backgroundColor: factor.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

