"use client"
import React, { useEffect } from 'react';
import CoursePreviewModal from '../CoursePreviewModal';
import AddCourseModal from '../AddCourseModal';
import { Icons } from '../icons';
import { useDispatch, useSelector } from 'react-redux';
import { setLecturerStatus } from '../store/slice/authSlice';
import {
  openModal,
  closeModal,
  openPreviewModal,
  closePreviewModal,
  setEditingCourse,
  setInputValue,
  setVenueValue,
  setLecturerValue,
  setDetailsValue,
  toggleEditMode,
  addOrUpdateCourse,
  setCurrentData,
} from '../store/slice/timetableSlice';

import { useToast } from '../ui/use-toast';
import { ThirdData } from '../data';
import { sendClassEmail, sendClassUpdateEmail } from '@/app/api/exam-timetable/send-email';



const Third: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state: any) => state.auth);
  const isLecturer = authState.isLecturer;
  // const timetableState = useSelector((state: any) => state.timetable);

  const isModalOpen = useSelector((state: any) => state.timetable.isModalOpen);
  const inputValue = useSelector((state: any) => state.timetable.inputValue);
  const venueValue = useSelector((state: any) => state.timetable.venueValue);
  const lecturerValue = useSelector((state: any) => state.timetable.lecturerValue);
  const detailsValue = useSelector((state: any) => state.timetable.detailsValue);
  const isEditMode = useSelector((state: any) => state.timetable.isEditMode);
  const editingCourse = useSelector((state: any) => state.timetable.editingCourse);
  const isPreviewModalOpen = useSelector((state: any) => state.timetable.isPreviewModalOpen);
  const selectedCourse = useSelector((state: any) => state.timetable.selectedCourse);
  const selectedVenue = useSelector((state: any) => state.timetable.selectedVenue);
  const selectedLecturers = useSelector((state: any) => state.timetable.selectedLecturers);
  const selectedDetails = useSelector((state: any) => state.timetable.selectedDetails);

  const { toast } = useToast();

  useEffect(() => {
    dispatch(setCurrentData(ThirdData))
    const storedUser = localStorage.getItem('user');
    let user = null;

    if (storedUser) {
      user = JSON.parse(storedUser);
      dispatch(setLecturerStatus(user.role === 'lecturer'));
    }
  }, [dispatch]);

  const handleOpenModal = (dayIndex: number, timeSlotIndex: number) => {
    dispatch(openModal({ dayIndex, timeSlotIndex }));
  };

  const handleOpenPreviewModal = (
    course: string,
    venue: string,
    lecturers: string[],
    details: string,
    dayIndex: number,
    timeSlotIndex: number
  ) => {
    dispatch(openPreviewModal({ course, venue, lecturers, details, dayIndex, timeSlotIndex }));
  };

  const handleEditCourse = (
    course: string,
    venue: string,
    lecturers: string[],
    details: string,
    dayIndex: number,
    timeSlotIndex: number,
  ) => {
    dispatch(setEditingCourse({ course, venue, lecturers, details }));
    dispatch(openModal({ dayIndex, timeSlotIndex }));
    const emailsToSend = [
      'jmiracle705@gmail.com',
      "oladimejiolanrewaju745@gmail.com",
      'ejoel0035@gmail.com',
      "giovannichindah@yahoo.com"
    ];
    sendClassUpdateEmail(emailsToSend);
      toast({
        description: 'Email sent',
      })
    toggleEditMode()
  };

  const handleAddCourseFromModal = () => {
    dispatch(addOrUpdateCourse());
    const emailsToSend = [
      'jmiracle705@gmail.com',
      "oladimejiolanrewaju745@gmail.com",
      'ejoel0035@gmail.com',
      "giovannichindah@yahoo.com"
    ];
    sendClassEmail(emailsToSend);
      toast({
        description: 'Email sent',
      })
  };

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
       300LVL DEPARTMENT OF COMPUTER SCIENCE
        (BSc FULL-TIME) FIRST SEMESTER LECTURE TIMETABLE 2021-2023
      </h1>
      <div>
        <div className="grid grid-cols-6">
          <div className="border border-gray-300"></div> {/* Placeholder for the top-left corner */}
          {ThirdData.map((dayData, index) => (
            <div className="flex items-center justify-center border border-gray-300" key={index}>
              <p className="text-xs lg:text-xl font-bold">{dayData.day}</p>
            </div>
          ))}
        </div>
        {timeSlots.map((timeSlot, index) => (
          <div className="grid grid-cols-6 h-20 w-full" key={index}>
            <div className="flex items-center px-2 border border-gray-300 text-xs lg:text-base font-bold">{timeSlot}</div>
            {ThirdData.map((dayData, dayIndex) => {
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
                        !!editingCourse && setEditingCourse(false)
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
          onClose={() => dispatch(closeModal())}
          onAddCourse={handleAddCourseFromModal}
          inputValue={inputValue}
          setInputValue={(value) => dispatch(setInputValue(value))}
          venueValue={venueValue}
          setVenueValue={(value) => dispatch(setVenueValue(value))}
          lecturerValue={lecturerValue}
          setLecturerValue={(value) => dispatch(setLecturerValue(value))}
          detailsValue={detailsValue}
          setDetailsValue={(value) => dispatch(setDetailsValue(value))}
          isEditMode={isEditMode}
        />
        <CoursePreviewModal
          isOpen={isPreviewModalOpen}
          onClose={() => dispatch(closePreviewModal())}
          course={selectedCourse}
          venue={selectedVenue}
          lecturers={selectedLecturers}
          details={selectedDetails}
        />
      </div>
    </>
  );
};

export default Third;
