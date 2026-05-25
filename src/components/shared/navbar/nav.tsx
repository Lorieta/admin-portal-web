import Image from 'next/image';
import './nav.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();

  function retrieve_pic() {
    const pic_url =
      'https://res.cloudinary.com/dttgvr9lo/image/upload/v1771848603/Gemini_Generated_Image_grshdugrshdugrsh_b2q57k.png';
    return pic_url;
  }
  const pic_url = retrieve_pic();

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + '/') || pathname.startsWith(href + '?');
  }

  return (
    <nav className="navbar">
      <div className="navbar_header">
        <p className="navbar_title">ADMIN PORTAL</p>
      </div>

      <div className="navbar_profile">
        <Image src={pic_url} alt="Profile pic" className="navbar_avatar" width={64} height={64} />
        <p className="navbar_name">Admin Name</p>
      </div>

      <ul className="navbar_tabs">
        <li className="navbar_tab">
          <Link
            href="/admin/dashboard"
            className={`navbar_link${isActive('/admin/dashboard') ? ' navbar_link--active' : ''}`}
          >
            <svg className="navbar_icon" viewBox="0 0 24 24" fill="currentColor">
           <path d="M0 12.5H10V0H0V12.5ZM0 22.5H10V15H0V22.5ZM12.5 22.5H22.5V10H12.5V22.5ZM12.5 0V7.5H22.5V0H12.5Z"/>
            </svg>
            Dashboard
          </Link>
        </li>
        <li className="navbar_tab">
          <Link
            href="/admin/tickets"
            className={`navbar_link${isActive('/admin/tickets') ? ' navbar_link--active' : ''}`}
          >
            <svg className="navbar_icon" viewBox="0 0 24 24" fill="currentColor">
           <path fillRule="evenodd" clipRule="evenodd" d="M21.25 0H2.36111C1.0625 0 0 1.125 0 2.5V20C0 21.375 1.0625 22.5 2.36111 22.5H21.25C22.5486 22.5 23.6111 21.375 23.6111 20V2.5C23.6111 1.125 22.5486 0 21.25 0ZM8.26389 17.5H4.72222C4.07292 17.5 3.54167 16.9375 3.54167 16.25C3.54167 15.5625 4.07292 15 4.72222 15H8.26389C8.91319 15 9.44444 15.5625 9.44444 16.25C9.44444 16.9375 8.91319 17.5 8.26389 17.5ZM8.26389 12.5H4.72222C4.07292 12.5 3.54167 11.9375 3.54167 11.25C3.54167 10.5625 4.07292 10 4.72222 10H8.26389C8.91319 10 9.44444 10.5625 9.44444 11.25C9.44444 11.9375 8.91319 12.5 8.26389 12.5ZM8.26389 7.5H4.72222C4.07292 7.5 3.54167 6.9375 3.54167 6.25C3.54167 5.5625 4.07292 5 4.72222 5H8.26389C8.91319 5 9.44444 5.5625 9.44444 6.25C9.44444 6.9375 8.91319 7.5 8.26389 7.5ZM19.7153 10.15L15.9729 14.1125C15.5125 14.6 14.7569 14.6 14.2965 14.1125L12.6319 12.3375C12.1715 11.85 12.1715 11.0625 12.6319 10.575C13.0924 10.0875 13.8361 10.0875 14.2965 10.575L15.1347 11.4625L18.0507 8.375C18.5111 7.8875 19.2549 7.8875 19.7153 8.375L19.7271 8.3875C20.1757 8.875 20.1757 9.675 19.7153 10.15Z"/>
</svg>

            Tickets
          </Link>
        </li>
        <li className="navbar_tab">
          <Link
            href="/admin/analytics"
            className={`navbar_link${isActive('/admin/analytics') ? ' navbar_link--active' : ''}`}
          >
            <svg className="navbar_icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
            </svg>
            Analytics
          </Link>
        </li>
        <li className="navbar_tab">
          <Link
            href="/admin/clients"
            className={`navbar_link${isActive('/admin/clients') ? ' navbar_link--active' : ''}`}
          >
            <svg className="navbar_icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05.02.01.03.03.05.04 1.95 1.14 2.92 2.76 2.92 3.41V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            Clients
          </Link>
        </li>
        <li className="navbar_tab">
          <Link
            href="/admin/systems"
            className={`navbar_link${isActive('/admin/systems') ? ' navbar_link--active' : ''}`}
          >
            <svg className="navbar_icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
            </svg>
            Systems
          </Link>
        </li>
        <li className="navbar_tab">
          <Link
            href="/admin/users"
            className={`navbar_link${isActive('/admin/users') ? ' navbar_link--active' : ''}`}
          >
            <svg className="navbar_icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Users
          </Link>
        </li>
        <li className="navbar_tab">
          <Link
            href="/admin/settings"
            className={`navbar_link${isActive('/admin/settings') ? ' navbar_link--active' : ''}`}
          >
            <svg className="navbar_icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84a.483.483 0 0 0-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.487.487 0 0 0-.59.22L3.02 9.47a.49.49 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.27.41.48.41h3.84c.24 0 .44-.17.48-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32a.49.49 0 0 0-.12-.61l-2.03-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
            </svg>
            Settings
          </Link>
        </li>
      </ul>

      <div className="navbar_footer">
        <button className="navbar_logout">
          <svg
            className="navbar_icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Log Out
        </button>
      </div>
    </nav>
  );
}
