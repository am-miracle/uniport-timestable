"use client"
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './ui/table';
import { schedule } from './general-data';

const Timetable: React.FC = () => {
  const renderTimeSlot = (startHour: number): string => {
    const displayHour = startHour > 12 ? startHour - 12 : startHour;
    const timePeriod = startHour < 12 ? 'am' : 'pm';

    return `${displayHour}${timePeriod}`;
  };

  return (
    <div className="overflow-x-auto">
      <h1 className="text-xl mb-2 text-center">
        UNIVERSITY OF PORT HARCOURT
        FACULTY OF SCIENCE
        DEPARTMENT OF COMPUTER SCIENCE
        (BSc FULL-TIME) FIRST SEMESTER LECTURE TIMETABLE 2021-2023
      </h1>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Time</TableHead>
              {Object.keys(schedule).map((day) => (
              <TableHead key={day}>{day}</TableHead>
            ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from(Array(9)).map((_, index) => {
                const startHour = index + 8;
                return(
                  <TableRow key={index}>
                    <TableCell>{`${renderTimeSlot(startHour)} - ${renderTimeSlot(startHour + 1)}`}</TableCell>
                    {Object.values(schedule).map((daySchedule, dayIndex) => (
                        <TableCell key={dayIndex}>
                          {daySchedule[index]?.map((subject, i) => (
                            <div key={i}>{subject.name}</div>
                          ))}
                        </TableCell>
                      ))}
                  </TableRow>
                )
            })}
          </TableBody>
        </Table>
        <div className="mt-6">
          <p>Dr. C.B. Marcus</p>
          <p>Time Table Officer</p>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
