import React from 'react';
import './ticket_management.scss';

export const TicketManagement = () => {
  return (
    <div className="ticket-management">
      <div className="management-left">
        <h2 className="management-title">Ticket Management</h2>
        <div className="search-container">
          <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input type="text" className="search-input" placeholder="" />
        </div>
      </div>
      <div className="management-right">
        <button className="management-btn bulk-btn">
          <div className="checkbox-dummy" />
          Bulk Assign
        </button>
        <button className="management-btn export-btn">
          <svg className="export-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Export
        </button>
      </div>
    </div>
  );
};
