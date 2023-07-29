import React, { FC, createContext, useContext, useEffect, useState } from 'react';
import { FirstData } from '../data';

const TimetableContext = createContext<any>(null);

// const useTimetableContext = () => useContext(TimetableContext)

// Create a context provider to manage the timetable state
const TimetableProvider: FC<{ initialData: any, children: React.ReactNode}>  = ({ initialData, children }) => {
  const [timetableData, setTimetableData] = useState<any>(FirstData);
  const [inputValue, setInputValue] = useState<string>('');
  const [venueValue, setVenueValue] = useState<string>('');
  const [detailsValue, setDetailsValue] = useState<string>('');
  const [lecturerValue, setLecturerValue] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<number>(-1);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number>(-1);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedVenue, setSelectedVenue] = useState<string>('');
  const [selectedDetails, setSelectedDetails] = useState<string>('');
  const [selectedLecturers, setSelectedLecturers] = useState<string[]>([]);
  const [isLecturer, setIsLecturer] = useState<boolean>(false);

  // The useEffect hook to check and set the lecturer status from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    let user = null;

    if (storedUser) {
      user = JSON.parse(storedUser);
      setIsLecturer(user.role === 'lecturer');
    }
  }, []);

  // Functions to update the state
  const handleOpenModal = (dayIndex: number, timeSlotIndex: number) => {
    setSelectedDay(dayIndex);
    setSelectedTimeSlot(timeSlotIndex);
    setIsModalOpen(true);
  };

  const handleOpenPreviewModal = (
    course: string,
    venue: string,
    lecturers: string[],
    details: string,
    dayIndex: number,
    timeSlotIndex: number
  ) => {
    setSelectedDay(dayIndex);
    setSelectedTimeSlot(timeSlotIndex);
    setSelectedCourse(course);
    setSelectedVenue(venue);
    setSelectedDetails(details);
    setSelectedLecturers(lecturers);
    setIsPreviewModalOpen(true);
  };

  const handleAddCourseFromModal = () => {
    const updatedTimetableData = [...timetableData];
    const updatedSchedule = [...updatedTimetableData[selectedDay].schedule];
    updatedSchedule[selectedTimeSlot].course = inputValue;
    updatedSchedule[selectedTimeSlot].venue = venueValue;
    updatedSchedule[selectedTimeSlot].details = detailsValue;
    updatedSchedule[selectedTimeSlot].lecturers = [lecturerValue];
    updatedTimetableData[selectedDay].schedule = updatedSchedule;
    setTimetableData(updatedTimetableData);
    setInputValue('');
    setVenueValue('');
    setDetailsValue('')
    setLecturerValue('');
    setIsModalOpen(false);
  };

  return (
    <TimetableContext.Provider
      value={{
        timetableData,
        setTimetableData,
        inputValue,
        setInputValue,
        venueValue,
        setVenueValue,
        detailsValue,
        setDetailsValue,
        lecturerValue,
        setLecturerValue,
        isModalOpen,
        setIsModalOpen,
        selectedDay,
        setSelectedDay,
        selectedTimeSlot,
        setSelectedTimeSlot,
        isPreviewModalOpen,
        setIsPreviewModalOpen,
        selectedCourse,
        setSelectedCourse,
        selectedVenue,
        setSelectedVenue,
        selectedDetails,
        setSelectedDetails,
        selectedLecturers,
        setSelectedLecturers,
        isLecturer,
        handleOpenModal,
        handleOpenPreviewModal,
        handleAddCourseFromModal,
      }}
    >
      {children}
    </TimetableContext.Provider>
  );
};

// Helper hook to consume the context in other components
const useTimetableContext = () => {
  const context = useContext(TimetableContext);
  if (!context) {
    throw new Error('useTimetableContext must be used within a TimetableProvider');
  }
  return context;
};

export { TimetableProvider, useTimetableContext };
