import React, { useState } from 'react';
import './TakeActionModal.css';

const MEDIA_ICONS = [
  { id: 'photo', icon: '📷', label: 'Photo' },
  { id: 'shoutout', icon: '⭐', label: 'Shoutout' },
  { id: 'poll', icon: '📋', label: 'Poll' },
  { id: 'suggest', icon: '🎤', label: 'Suggest' },
  { id: 'files', icon: '📝', label: 'Files' },
];

const TABS = ['Vibe', 'Connect', 'Perform'];

interface TakeActionModalProps {
  visible: boolean;
  onClose: () => void;
}

export const TakeActionModal: React.FC<TakeActionModalProps> = ({ visible, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('Vibe');
  const [activeMedia, setActiveMedia] = useState<string>('shoutout');
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [impact, setImpact] = useState<string>('');

  if (!visible) return null;

  const handleSubmit = () => {
    console.log({
      tab: activeTab,
      media: activeMedia,
      user: selectedUser,
      impact: impact,
    });
    onClose();
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal__overlay"></div>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal__header">
          <div className="modal__header-tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`modal__header-tab ${activeTab === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>
          <button onClick={onClose} className="modal__header-close">
            ✕
          </button>
        </div>

        <div className="modal__body">
          {/* Sub-tabs for media */}
          <div className="modal__section">
            <div className="modal__section-label">Media</div>
            <div className="modal__section-icons">
              {MEDIA_ICONS.map((media) => (
                <button
                  key={media.id}
                  onClick={() => setActiveMedia(media.id)}
                  className={`modal__section-icon ${activeMedia === media.id ? 'active' : ''}`}
                >
                  {media.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Sub-tabs for shoutout type */}
          <div className="modal__section">
            <div className="modal__section-buttons">
              {['Media', 'Shoutout', 'Poll', 'Suggest', 'Files'].map((tab) => (
                <button key={tab} className="modal__section-button">
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Search users */}
          <input
            type="text"
            className="modal__input"
            placeholder="Search for users here"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          />

          {/* Company values dropdown */}
          <button className="modal__button">Select related company values</button>

          {/* Impact text area */}
          <textarea
            className="modal__textarea"
            placeholder="What was the impact (in a few sentences)?"
            rows={4}
            value={impact}
            onChange={(e) => setImpact(e.target.value)}
          />

          {/* User/Team selector */}
          <button className="modal__button">Select a user/team first</button>

          {/* Submit button */}
          <button className="modal__submit" onClick={handleSubmit}>
            Give shoutout
          </button>
        </div>
      </div>
    </div>
  );
};


