import React, { useState, useEffect, useRef } from 'react';
import { useLoaderData, useSearchParams, useNavigate, useNavigation } from 'react-router-dom';
import { type Team, Card, Gauge, ProgressBar, TakeActionModal } from '@heelix-workspace/shared';
import type { loader } from './Dashboard';
import './Dashboard.css';

export default function DashboardPage() {
  const { team: initialTeam, teamData: initialTeamData, teams } = useLoaderData<typeof loader>();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const navigation = useNavigation();
  
  // Sync selectedTeam with loader data
  const [selectedTeam, setSelectedTeam] = useState<Team>(initialTeam);
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);
  const [showTakeActionModal, setShowTakeActionModal] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Update selectedTeam when loader data changes
  useEffect(() => {
    setSelectedTeam(initialTeam);
  }, [initialTeam]);

  const teamData = initialTeamData;
  const isLoading = navigation.state === 'loading';

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 800);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

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
    setShowTeamDropdown(false);
    // Navigate to trigger loader with new team parameter
    navigate(`/?team=${team}`, { replace: true });
  };

  return (
    <div className="dashboard">
      {isLoading && (
        <div className="dashboard__loading-overlay">
          <div className="dashboard__loading-spinner"></div>
        </div>
      )}
      <div className="dashboard__container">
        {/* HEADER */}
        <div className="dashboard__header">
          <div className="dashboard__header-title">
            <h1>Insights dashboard</h1>
          </div>
          <button
            className="dashboard__header-button"
            onClick={() => setShowTakeActionModal(true)}
          >
            Take action
          </button>
        </div>

        {/* FILTERS */}
        <div className="dashboard__filters">
          <div className="dashboard__filters-dropdown team-dropdown-container" ref={dropdownRef}>
            <button
              className="dashboard__filters-dropdown-button"
              onClick={() => setShowTeamDropdown(!showTeamDropdown)}
            >
              <span>{selectedTeam} ▼</span>
            </button>
            {showTeamDropdown && (
              <div className="dashboard__filters-dropdown-menu">
                {teams.map((team) => (
                  <button key={team} onClick={() => selectTeam(team)}>
                    <span>{team}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="dashboard__filters-period">
            <span>Last 30 days ▼</span>
          </div>
        </div>

        {/* TOP SECTION: GAUGE & CHART */}
        <div className={`dashboard__top-section ${isLargeScreen ? 'row' : 'column'}`}>
          {/* Left: Vibe Score */}
          <Card className="dashboard__gauge-card">
            <Gauge score={teamData.vibeScore} />
          </Card>

          {/* Right: Score History */}
          <Card className={`dashboard__chart ${isLargeScreen ? 'dashboard__chart--large' : ''}`}>
            <div className="dashboard__chart-header">
              <h2>Score history</h2>
              <span>Last 9 months</span>
            </div>
            <div className="dashboard__chart-graph">
              <div className="dashboard__chart-graph-line"></div>
              <div className="dashboard__chart-graph-point" style={{ left: '10%', top: '60%' }}></div>
              <div className="dashboard__chart-graph-point" style={{ left: '30%', top: '40%' }}></div>
              <div className="dashboard__chart-graph-point" style={{ left: '50%', top: '70%' }}></div>
              <div className="dashboard__chart-graph-point" style={{ left: '70%', top: '30%' }}></div>
              <div className="dashboard__chart-graph-point" style={{ left: '90%', top: '50%' }}></div>
            </div>
          </Card>
        </div>

        {/* MIDDLE SECTION: KPIS */}
        <div className="dashboard__kpis">
          <div className="dashboard__kpis-item">
            <span className="dashboard__kpis-item-emoji">☹️</span>
            <p className="dashboard__kpis-item-text">Your overall team Vibe is</p>
            <p className="dashboard__kpis-item-text bold">{teamData.overallVibe}</p>
          </div>

          <div className="dashboard__kpis-item">
            <div className="dashboard__kpis-item-circle yellow">
              <span>{teamData.participation}%</span>
            </div>
            <span className="dashboard__kpis-item-label">Participation</span>
          </div>

          <div className="dashboard__kpis-item">
            <div className="dashboard__kpis-item-circle blue">
              <span>{teamData.monthlyActiveUsers}%</span>
            </div>
            <span className="dashboard__kpis-item-label">Monthly active users</span>
          </div>

          <div className="dashboard__kpis-item">
            <div className="dashboard__kpis-item-icon">
              <span>👥</span>
            </div>
            <span className="dashboard__kpis-item-link">View team details</span>
          </div>
        </div>

        {/* BOTTOM SECTION: METRICS */}
        <h2 className="dashboard__metrics-title">Key performance metrics</h2>
        <div className="dashboard__metrics-grid">
          {teamData.kpiData.map((kpi) => (
            <div key={kpi.label} className={`dashboard__metrics-grid-item ${isLargeScreen ? 'large' : 'full'}`}>
              <ProgressBar label={kpi.label} value={kpi.value} color={kpi.color} />
            </div>
          ))}
        </div>
      </div>

      <TakeActionModal visible={showTakeActionModal} onClose={() => setShowTakeActionModal(false)} />
    </div>
  );
}


