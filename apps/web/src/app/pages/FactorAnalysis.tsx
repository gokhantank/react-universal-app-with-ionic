import { LoaderFunctionArgs } from 'react-router-dom';
import { TEAMS, teamDataConfig, type Team } from '@heelix-workspace/shared';

// Loader function for React Router v7
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const teamParam = url.searchParams.get('team');
  
  // Validate team parameter
  const team: Team = teamParam && TEAMS.includes(teamParam as Team) 
    ? (teamParam as Team)
    : 'Engineering Product';
  
  // Simulate async data loading (in real app, this would be an API call)
  await new Promise(resolve => setTimeout(resolve, 100));
  
  return {
    team,
    teamData: teamDataConfig[team],
    factors: teamDataConfig[team].factorData,
    teams: TEAMS,
  };
}

export { default as Component } from './FactorAnalysisPage';

