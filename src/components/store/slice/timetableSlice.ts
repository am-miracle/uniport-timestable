import { FourthData } from "@/components/data";
import { toast } from "@/components/ui/use-toast";
import { createSlice } from "@reduxjs/toolkit";

interface ScheduleItem {
    course: string;
    venue: string;
    details: string;
    lecturers: string[];
    time: string;
}
interface DayData {
    schedule: ScheduleItem[];
}
interface TimetableState {
    currentData: DayData[];
    // other properties
    isModalOpen: boolean;
    selectedDay: number
    selectedTimeSlot: number;
    isPreviewModalOpen: boolean
    selectedCourse: string;
    selectedVenue: string;
    selectedLecturers: string[],
    selectedDetails: string;
    editingCourse: null;
    isEditMode: boolean;
    inputValue: string;
    venueValue: string;
    lecturerValue: string;
    detailsValue: string
}
const initialTimetableState: TimetableState = {
//   timetableData: FourthData,
  currentData: [],
  isModalOpen: false,
  selectedDay: -1,
  selectedTimeSlot: -1,
  isPreviewModalOpen: false,
  selectedCourse: "",
  selectedVenue: "",
  selectedLecturers: [],
  selectedDetails: "",
  editingCourse: null,
  isEditMode: false,
  inputValue: "",
  venueValue: "",
  lecturerValue: "",
  detailsValue: "",
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

const timetableSlice = createSlice({
  name: "timetable",
  initialState: initialTimetableState,
  reducers: {
    setCurrentData: (state, action) => {
        state.currentData = action.payload;
    },
    openModal: (state, action) => {
      state.selectedDay = action.payload.dayIndex;
      state.selectedTimeSlot = action.payload.timeSlotIndex;
      state.isModalOpen = true;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.editingCourse = null;
    },
    openPreviewModal: (state, action) => {
      const {
        course,
        venue,
        lecturers,
        details,
        dayIndex,
        timeSlotIndex,
      } = action.payload;
      state.selectedDay = dayIndex;
      state.selectedTimeSlot = timeSlotIndex;
      state.selectedCourse = course;
      state.selectedVenue = venue;
      state.selectedDetails = details;
      state.selectedLecturers = lecturers;
      state.isPreviewModalOpen = true;
    },
    closePreviewModal: (state) => {
      state.isPreviewModalOpen = false;
    },
    setEditingCourse: (state, action) => {
      state.editingCourse = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setVenueValue: (state, action) => {
      state.venueValue = action.payload;
    },
    setLecturerValue: (state, action) => {
      state.lecturerValue = action.payload;
    },
    setDetailsValue: (state, action) => {
      state.detailsValue = action.payload;
    },
    toggleEditMode: (state) => {
      state.isEditMode = !state.isEditMode;
    },
    addOrUpdateCourse: (state) => {
      const { selectedDay, selectedTimeSlot, inputValue, venueValue, lecturerValue, detailsValue, editingCourse } = state;

      const updatedTimetableData = [...state.currentData];
      const updatedSchedule = [...updatedTimetableData[selectedDay].schedule];

      if (editingCourse) {
        // Editing existing course
        const { course, venue, details } = editingCourse;
        updatedSchedule[selectedTimeSlot].course = inputValue || course;
        updatedSchedule[selectedTimeSlot].venue = venueValue || venue;
        updatedSchedule[selectedTimeSlot].details = detailsValue || details;
        updatedSchedule[selectedTimeSlot].lecturers = [lecturerValue];
      } else {
        // Adding new course
        updatedSchedule[selectedTimeSlot] = {
          course: inputValue,
          venue: venueValue,
          details: detailsValue,
          lecturers: [lecturerValue],
          time: timeSlots[selectedTimeSlot],
        };
      }

      updatedTimetableData[selectedDay].schedule = updatedSchedule;

      // Reset state values
      state.currentData = updatedTimetableData;
      state.inputValue = '';
      state.venueValue = '';
      state.lecturerValue = '';
      state.detailsValue = '';
      state.isModalOpen = false;
      state.editingCourse = null;

      toast({
        description: editingCourse ? 'Class successfully edited' : 'Class successfully added',
      });
    },
  },
});

export const {
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
  setCurrentData
} = timetableSlice.actions;

export default timetableSlice;
