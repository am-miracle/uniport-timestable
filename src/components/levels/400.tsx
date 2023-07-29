"use client"
import React, { useEffect, useState } from 'react';
import { useToast } from '../ui/use-toast';
import CoursePreviewModal from '../CoursePreviewModal';
import { FourthData } from '../data';
import AddCourseModal from '../AddCourseModal';
import { Icons } from '../icons';


const Four: React.FC = () => {
  const [timetableData, setTimetableData] = useState<any>(FourthData);
  const [inputValue, setInputValue] = useState<string>('');
  const [venueValue, setVenueValue] = useState<string>('');
  const [lecturerValue, setLecturerValue] = useState<string>('');
  const [detailsValue, setDetailsValue] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDay, setSelectedDay] = useState<number>(-1);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<number>(-1);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState<boolean>(false);
  const [selectedCourse, setSelectedCourse] = useState<string>('');
  const [selectedVenue, setSelectedVenue] = useState<string>('');
  const [selectedLecturers, setSelectedLecturers] = useState<string[]>([]);
  const [selectedDetails, setSelectedDetails] = useState<string>('');
  const [isLecturer, setIsLecturer] = useState<boolean>(false);
  const [editingCourse, setEditingCourse] = useState<any>(null);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const { toast } = useToast();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    let user = null;

    if (storedUser) {
      user = JSON.parse(storedUser);
      setIsLecturer(user.role === 'lecturer');
    }
  }, []);

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

  const handleEditCourse = (
    course: string,
    venue: string,
    lecturers: string[],
    details: string,
    dayIndex: number,
    timeSlotIndex: number,
  ) => {
    setSelectedDay(dayIndex);
    setSelectedTimeSlot(timeSlotIndex);
    setEditingCourse({
      course,
      venue,
      lecturers,
      details,
    });
    setIsModalOpen(true);
  };

  const handleAddCourseFromModal = () => {
    const updatedTimetableData = [...timetableData];
    const updatedSchedule = [...updatedTimetableData[selectedDay].schedule];

    if (editingCourse) {
      // Editing existing course
      updatedSchedule[selectedTimeSlot].course = inputValue;
      updatedSchedule[selectedTimeSlot].venue = venueValue;
      updatedSchedule[selectedTimeSlot].details = detailsValue;
      updatedSchedule[selectedTimeSlot].lecturers = [lecturerValue];
      // setIsEditMode(true)
    } else {
      // Adding new course
      updatedSchedule[selectedTimeSlot] = {
        course: inputValue,
        venue: venueValue,
        details: detailsValue,
        lecturers: [lecturerValue],
        time: timeSlots[selectedTimeSlot],
      };
      setIsEditMode(false)
    }

    updatedTimetableData[selectedDay].schedule = updatedSchedule;
    setTimetableData(updatedTimetableData);
    setInputValue('');
    setVenueValue('');
    setDetailsValue('');
    setLecturerValue('');
    setIsModalOpen(false);
    setEditingCourse(null);

    toast({
      description: editingCourse ? 'Class successfully edited' : 'Class successfully added',
    });
  };

  // const isNewlyAddedCourse = (courseData: any) => {
  //   return !courseData || !courseData.course;
  // };

  const timeSlots = [
    '8AM - 9AM',
    '9AM - 10AM',
    '10AM - 11AM',
    '11AM - 12PM',
    '12PM - 1PM',
    '1PM - 2PM',
    '2PM - 3PM',
    '3PM - 4PM',
    '4PM - 5PM',
    '5PM - 6PM',
  ];

  return (
    <>
      <h1 className="text-xl mb-2 text-center">
       400LVL DEPARTMENT OF COMPUTER SCIENCE
        (BSc FULL-TIME) FIRST SEMESTER LECTURE TIMETABLE 2021-2023
      </h1>
      <div>
        <div className="grid grid-cols-6">
          <div className="border border-gray-300"></div> {/* Placeholder for the top-left corner */}
          {FourthData.map((dayData, index) => (
            <div className="flex items-center justify-center border border-gray-300" key={index}>
              <p className="text-xs lg:text-xl font-bold">{dayData.day}</p>
            </div>
          ))}
        </div>
        {timeSlots.map((timeSlot, index) => (
          <div className="grid grid-cols-6 h-20 w-full" key={index}>
            <div className="flex items-center px-2 border border-gray-300 text-xs lg:text-base font-bold">{timeSlot}</div>
            {FourthData.map((dayData, dayIndex) => {
              const courseData = dayData.schedule.find(
                (item: { time: string; course: string; venue?: string; lecturers?: string[] }) =>
                  item.time === timeSlot
              );
              const isCourseAdded = courseData && courseData.course !== ''
              return (
                <div
                  className="flex items-center justify-center border border-gray-300 hover:bg-gray-700 cursor-pointer relative"
                  key={dayIndex}
                  onClick={() => {
                    const { course, venue, lecturers, details } = courseData || {};
                    if (course) {
                      handleOpenPreviewModal(course, venue || '', lecturers || [], details || '', dayIndex, index);
                    } else if (isLecturer) {
                      handleEditCourse('', '', [], '', dayIndex, index, );
                    } else if (!courseData || courseData.course === '') {
                      if (isLecturer) {
                        handleOpenModal(dayIndex, index);
                      } else {
                        toast({
                          description: 'You are not registered as a lecturer.',
                        });
                      }
                    }
                  }}
                >
                  {courseData ? (
                    <div className="text-center">
                      <h1 className="font-bold text-sm lg:text-xl">{courseData.course}</h1>
                      <p className="text-xs lg:text-base">{`${courseData.venue ? `(${courseData.venue})` : ''}`}</p>
                    </div>
                  ) : (
                    'No course'
                  )}
                  {isCourseAdded && courseData && (
                    <button
                      className="absolute top-0 right-0 bg-gray-500 text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEditCourse(
                          courseData.course,
                          courseData.venue || '',
                          courseData.lecturers || [],
                          courseData.details || '',
                          dayIndex,
                          index
                        );
                        !!editingCourse && setIsEditMode(true)
                      }}
                    >
                      <Icons.edit className='h-5 w-5' />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        ))}
        <AddCourseModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddCourse={handleAddCourseFromModal}
          inputValue={inputValue}
          setInputValue={setInputValue}
          venueValue={venueValue}
          setVenueValue={setVenueValue}
          lecturerValue={lecturerValue}
          setLecturerValue={setLecturerValue}
          detailsValue={detailsValue}
          setDetailsValue={setDetailsValue}
          isEditMode={isEditMode}
        />
        <CoursePreviewModal
          isOpen={isPreviewModalOpen}
          onClose={() => setIsPreviewModalOpen(false)}
          course={selectedCourse}
          venue={selectedVenue}
          lecturers={selectedLecturers}
          details={selectedDetails}
        />
      </div>
    </>
  );
};

export default Four;
