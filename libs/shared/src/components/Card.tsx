import React from 'react';
import './Card.css';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = '', children }) => {
  return <div className={`lib-card ${className}`}>{children}</div>;
};


