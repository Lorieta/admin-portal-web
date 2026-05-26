import React from 'react';
import Image from 'next/image';
import './available_agents.scss';

export interface AvailableAgentData {
  name: string;
  tickets: number;
  avatar: string;
}

export const AvailableAgents = ({ agents = [] }: { agents?: AvailableAgentData[] }) => {
  return (
    <div className="available-agents">
      <h3 className="available-agents-title">Available Agents for Assignment</h3>
      <div className="agents-list">
        {agents.map((agent, index) => (
          <div key={index} className="agent-item">
            <Image src={agent.avatar} alt={agent.name} width={32} height={32} className="agent-avatar" />
            <div className="agent-details">
              <div className="agent-main-row">
                <span className="agent-name">{agent.name}</span>
                <span className="agent-tickets">{agent.tickets}</span>
              </div>
              <div className="agent-divider" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
