
import React, { useState } from 'react';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const Calendar: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<number | null>(null);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const handleDateClick = (day: number) => {
        setSelectedDate(day);
    };
    
    const renderDays = () => {
        const blanks = Array(firstDayOfMonth).fill(null);
        const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

        return [...blanks, ...days].map((day, index) => {
            if (day === null) {
                return <div key={`blank-${index}`} className="w-12 h-12"></div>;
            }
            const isToday = new Date().getDate() === day && new Date().getMonth() === month && new Date().getFullYear() === year;
            const isSelected = selectedDate === day;

            return (
                <div
                    key={day}
                    onClick={() => handleDateClick(day)}
                    className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer transition-colors duration-200 
                    ${isSelected ? 'bg-blue-600 text-white font-bold' : ''} 
                    ${!isSelected && isToday ? 'bg-blue-500/30 text-white' : ''}
                    ${!isSelected ? 'hover:bg-gray-600' : ''}`}
                >
                    {day}
                </div>
            );
        });
    };

    return (
        <div className="bg-gray-700 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
                <button 
                    onClick={() => setCurrentDate(new Date(year, month - 1, 1))} 
                    className="p-2 rounded-full hover:bg-gray-600">&lt;</button>
                <h3 className="text-xl font-semibold text-white">
                    {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h3>
                <button 
                    onClick={() => setCurrentDate(new Date(year, month + 1, 1))} 
                    className="p-2 rounded-full hover:bg-gray-600">&gt;</button>
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-gray-400 mb-2">
                {daysOfWeek.map(day => <div key={day} className="font-medium">{day}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-2 text-center text-gray-200">
                {renderDays()}
            </div>
             {selectedDate && (
                <p className="text-center mt-4 text-green-400">
                    Appointment request sent for {new Date(year, month, selectedDate).toLocaleDateString()}. You will receive a confirmation email.
                </p>
            )}
        </div>
    );
};
