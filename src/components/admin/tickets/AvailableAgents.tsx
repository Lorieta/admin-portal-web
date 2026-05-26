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
            <div className="agent-info">
              <div className="agent-avatar-container">
                <Image src={agent.avatar} alt={agent.name} width={24} height={24} className="agent-avatar" />
              </div>
              <span className="agent-name">{agent.name}</span>
            </div>
            <span className="agent-tickets">{agent.tickets}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
