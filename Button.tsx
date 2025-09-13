
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'special';
}

export const Button: React.FC<ButtonProps> = ({ children, className, variant = 'primary', ...props }) => {
    const baseClasses = "px-6 py-3 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 transform hover:scale-105";

    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
        secondary: 'bg-gray-700 text-gray-200 hover:bg-gray-600 focus:ring-gray-500',
        special: 'bg-gradient-to-r from-pink-500 to-orange-400 text-white hover:from-pink-600 hover:to-orange-500 focus:ring-pink-500'
    };

    return (
        <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};
