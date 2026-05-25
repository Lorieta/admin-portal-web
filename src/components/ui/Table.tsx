import { ReactNode } from 'react';
import '../tickets/ticket_table.scss';

interface TableProps {
  headers: string[];
  children: ReactNode;
}

export const TableContainer: FC<TableProps & { columns: string; sortableColumns?: string[] }> = ({ headers, columns, sortableColumns = [], children }) => {
  return (
    <div className="admin-table">
      <div className="admin-table-header" style={{ gridTemplateColumns: columns }}>
        {headers.map((header, index) => {
          const isSortable = sortableColumns.includes(header);
          return (
            <div key={index} className="cell header-cell">
              {header}
              {isSortable && (
                <svg className="sort-icon" width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.75 8.75L4.25 11.75L7.75 8.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M0.75 3.75L4.25 0.75L7.75 3.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          );
        })}
      </div>
      {children}
    </div>
  );
};
