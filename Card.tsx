
import React from 'react';

interface CardProps {
    title: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({ title, icon, children, className }) => {
    return (
        <div className={`bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700/50 ${className}`}>
            <div className="flex items-center text-2xl font-bold text-white mb-6">
                {icon && <span className="mr-4 text-blue-400">{icon}</span>}
                <h2>{title}</h2>
            </div>
            <div>{children}</div>
        </div>
    );
};
