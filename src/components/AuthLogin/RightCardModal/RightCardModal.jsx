import './RightCardModal.css';
import RightCardModalList from '../RightCardModalList/RightCardModalList';
import { IconSearch, IconFilter } from '@tabler/icons-react';

const TABS = ['Interview', 'Dashboard', 'Applications'];
const ACTIVE_TAB = 'Applications';
const AVATAR_COLORS = ['purple', 'blue', 'green'];

export default function RightCardModal() {
    return (
        <div className="right-card-modal-container">
            <header className="modal-header">
                <div className="window-dots" aria-hidden="true">
                    <span className="window-dot window-dot-red"></span>
                    <span className="window-dot window-dot-orange"></span>
                    <span className="window-dot window-dot-green"></span>
                </div>

                <nav className="modal-tabs">
                    {TABS.map(tab => (
                        <span
                            key={tab}
                            className={`modal-tab ${tab === ACTIVE_TAB ? 'modal-tab-active' : ''}`}
                        >
                            {tab}
                        </span>
                    ))}
                </nav>

                <div className="avatar-stack" aria-hidden="true">
                    {AVATAR_COLORS.map(color => (
                        <span key={color} className={`avatar avatar-${color}`}></span>
                    ))}
                </div>
            </header>

            <section className="modal-hero">
                <div className="modal-hero-text">
                    <h4 className="modal-title">Applications</h4>
                    <span className="modal-subtitle">18 total · Fall 2026 cycle</span>
                </div>

                <div className="modal-actions">
                    <button type="button" className="action-button">
                        <IconSearch stroke={2} size={16} />
                        <span>Search</span>
                    </button>
                    <button type="button" className="action-button">
                        <IconFilter stroke={2} size={16} />
                        <span>Filter</span>
                    </button>
                </div>
            </section>

            <div className="modal-columns">
                <span>Company / Role</span>
                <span>Status</span>
            </div>

            <RightCardModalList />

            <footer className="modal-footer">
                <button type="button" className="add-button">
                    + Add Application
                </button>

                <div className="footer-stats">
                    <span className="stat">
                        <span className="stat-dot stat-dot-offer"></span>
                        <strong>1</strong> offer
                    </span>
                    <span className="stat">
                        <span className="stat-dot stat-dot-active"></span>
                        <strong>3</strong> active
                    </span>
                </div>
            </footer>
        </div>
    );
}