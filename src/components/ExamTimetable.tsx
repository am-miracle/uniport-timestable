"use client"
import React, { ChangeEvent, useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Exam, exams } from './exam-data'
import { Button } from './ui/button'
import { sendEmail } from '@/app/api/exam-timetable/send-email'
import { useToast } from './ui/use-toast'

const ExamTimetable = () => {
  const [editMode, setEditMode] = useState(false);
  const [updatedExams, setUpdatedExams] = useState<Exam[]>(exams); // Initialize with initial data
  const [changedExams, setChangedExams] = useState<number[]>([]);
  const [isTimetableOfficer, setIsTimetableOfficer] = useState<boolean>(false);
  const {toast} = useToast();


  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    let user = null;

    if (storedUser) {
      user = JSON.parse(storedUser);
      setIsTimetableOfficer(user.role === 'timetable-officer');
    }
  }, []);


  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleInputChange = (
    index: number,
    field: string,
    value: string | string[]
  ) => {
    const newExams = [...updatedExams];
  
    switch (field) {
      case 'date':
        newExams[index].date = value as string;
        break;
      case 'day':
        newExams[index].day = value as string;
        break;
      case 'morningCourse':
        if (newExams[index].morning) {
          newExams[index].morning!.course = value as string | string[];
        }
        break;
      case 'morningTime':
        if (newExams[index].morning) {
          newExams[index].morning!.time = value as string;
        }
        break;
      case 'morningVenue':
        if (newExams[index].morning) {
          newExams[index].morning!.venue = value as string;
        }
        break;
      case 'morningSupervisor':
        if (newExams[index].morning) {
          newExams[index].morning!.supervisor = value as string;
        }
        break;
      case 'morningLecturer':
        if (newExams[index].morning) {
          newExams[index].morning!.lecturers = value as string[];
        }
        break;
      case 'morningInvigilator':
        if (newExams[index].morning) {
          newExams[index].morning!.invigilators = value as string[];
        }
        break;
      // case 'afternoon':
      //   if (newExams[index].afternoon) {
      //     newExams[index].afternoon!.course = value as string;
      //     newExams[index].afternoon!.time = value as string;
      //     newExams[index].afternoon!.venue = value as string;
      //     newExams[index].afternoon!.supervisor = value as string;
      //     newExams[index].afternoon!.lecturers = value as string[];
      //     newExams[index].afternoon!.invigilators = value as string[];
      //   }
      //   break;
      // Add more cases for other fields...
      case 'afternoonCourse':
        if (newExams[index].afternoon) {
          newExams[index].afternoon!.course = value as string;
        }
        break;
      case 'afternoonTime':
        if (newExams[index].afternoon) {
          newExams[index].afternoon!.time = value as string;
        }
        break;
      case 'afternoonVenue':
        if (newExams[index].afternoon) {
          newExams[index].afternoon!.venue = value as string;
        }
        break;
      case 'afternoonSupervisor':
        if (newExams[index].afternoon) {
          newExams[index].afternoon!.supervisor = value as string;
        }
        break;
      case 'afternoonLecturer':
        if (newExams[index].afternoon) {
          newExams[index].afternoon!.lecturers = value as string[];
        }
        break;
      case 'afternoonInvigilator':
        if (newExams[index].afternoon) {
          newExams[index].afternoon!.invigilators = value as string[];
        }
        break;
      default:
        break;
    }

    setUpdatedExams(newExams); // Update the state with the modified data
    setChangedExams((prevChangedExams) => {
      if (!prevChangedExams.includes(index)) {
        return [...prevChangedExams, index];
      }
      return prevChangedExams;
    });
  };

  useEffect(() => {
    if (!editMode) {
      if (changedExams.length > 0) {
        const emailsToSend = [
        'jmiracle705@gmail.com',
        "oladimejiolanrewaju745@gmail.com",
        'ejoel0035@gmail.com',
        "giovannichindah@yahoo.com"
      ];
        sendEmail(emailsToSend);
        toast({
          description: 'Email sent',
        })
      }
    }
  }, [editMode, changedExams, toast]);

  return (
    <div className="overflow-x-auto">
      {isTimetableOfficer && <Button onClick={toggleEditMode}>
        {editMode ? 'Exit Edit Mode' : 'Create new Timetable'}
        </Button>
      }
      <Table>
         <TableCaption>NOTE: GES Registration Handbook is required for GES Examination.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Day</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Venue</TableHead>
            <TableHead>Supervisor</TableHead>
            <TableHead>Course Lecturers</TableHead>
            <TableHead>Invigilators</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {updatedExams.map((exam, index) => (
            <React.Fragment key={index}>
              <TableRow key={index}>
                <TableCell>
                  {editMode ? (
                    <input
                      type="text"
                      value={exam.date}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange(index, 'date', e.target.value)
                      }
                    />
                  ) : (
                    exam.date
                  )}
                </TableCell>
                <TableCell>
                  {editMode ? (
                    <input
                      type="text"
                      value={exam.day}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleInputChange(index, 'day', e.target.value)
                      }
                    />
                  ) : (
                    exam.day
                  )}
                </TableCell>
                {exam.morning && (
                  <>
                    <TableCell>
                      {editMode ? (
                        <input
                          type="text"
                          value={exam.morning?.course}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(index, 'morningCourse', e.target.value)
                          }
                        />
                      ): (
                        Array.isArray(exam.morning?.course)
                              ? exam.morning?.course.join(' / ')
                              : exam.morning?.course
                      )}
                    </TableCell>
                    <TableCell>
                      {editMode ? (
                        <input
                          type="text"
                          value={exam.morning?.time}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(index, 'morningTime', e.target.value)
                          }
                        />
                      ) : (
                        exam.morning?.time
                      )}
                    </TableCell>
                    <TableCell>
                      {/* {exam.morning?.venue} */}
                    {editMode ? (
                        <input
                          type="text"
                          value={exam.morning?.venue}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(index, 'morningVenue', e.target.value)
                          }
                        />
                      ) : (
                        exam.morning?.venue
                      )}
                    </TableCell>
                    <TableCell>
                      {editMode ? (
                        <input
                          type="text"
                          value={exam.morning?.supervisor}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(index, 'morningSupervisor', e.target.value)
                          }
                        />
                      ) : (
                        exam.morning?.supervisor
                      )}
                    </TableCell>
                    <TableCell>
                      {editMode ? (
                        <input
                          type="text"
                          value={exam.morning?.lecturers}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(index, 'morningLecturer', e.target.value.split(','))
                          }
                        />
                      ) : (
                        exam.morning?.lecturers.join(', ')
                      )}
                    </TableCell>
                    <TableCell>
                      {editMode ? (
                        <input
                          type="text"
                          value={exam.morning?.invigilators}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(index, 'morningInvigilator', e.target.value.split(','))
                          }
                        />
                      ) : (
                        exam.morning?.invigilators.join(', ')
                      )}
                    </TableCell>
                  </>
                )}
              </TableRow>
              <TableRow key={`${index}-afternoon`}>
                {exam.afternoon && (
                  <>
                    {exam.afternoon && (
                      <>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                      </>
                    )}
                    <TableCell>
                      {editMode ? (
                        <input
                          type="text"
                          value={exam.afternoon?.course}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(index, 'afternoonCourse', e.target.value)
                          }
                        />
                      ): (
                        Array.isArray(exam.afternoon?.course)
                              ? exam.afternoon?.course.join(' / ')
                              : exam.afternoon?.course
                      )}
                    </TableCell>
                    <TableCell>
                      {editMode ? (
                        <input
                          type="text"
                          value={exam.afternoon?.time}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(index, 'afternoonTime', e.target.value)
                          }
                        />
                      ) : (
                        exam.afternoon?.time
                      )}
                    </TableCell>
                    <TableCell>
                      {/* {exam.afternoon?.venue} */}
                    {editMode ? (
                        <input
                          type="text"
                          value={exam.afternoon?.venue}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(index, 'afternoonVenue', e.target.value)
                          }
                        />
                      ) : (
                        exam.afternoon?.venue
                      )}
                    </TableCell>
                    <TableCell>
                      {editMode ? (
                        <input
                          type="text"
                          value={exam.afternoon?.supervisor}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(index, 'afternoonSupervisor', e.target.value)
                          }
                        />
                      ) : (
                        exam.afternoon?.supervisor
                      )}
                    </TableCell>
                    <TableCell>
                      {editMode ? (
                        <input
                          type="text"
                          value={exam.afternoon?.lecturers}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(index, 'afternoonLecturer', e.target.value.split(','))
                          }
                        />
                      ) : (
                        exam.afternoon?.lecturers.join(', ')
                      )}
                    </TableCell>
                    <TableCell>
                      {editMode ? (
                        <input
                          type="text"
                          value={exam.afternoon?.invigilators}
                          onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            handleInputChange(index, 'afternoonInvigilator', e.target.value.split(','))
                          }
                        />
                      ) : (
                        exam.afternoon?.invigilators.join(', ')
                      )}
                    </TableCell>
                  </>
                )}
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-end items-center">
        <span>
          <p>Dr. C.B. Marcus</p>
          <p>Time Table Officer</p>
        </span>
      </div>
    </div>
  )
}

export default ExamTimetable


