 interface Exam {
    date: string;
    day: string;
    morning?: {
      course: string[] | string;
      time: string;
      venue: string;
      supervisor: string;
      lecturers: string[];
      invigilators: string[];
    };
    afternoon?: {
      course: string[] | string;
      time: string;
      venue: string;
      supervisor: string;
      lecturers: string[];
      invigilators: string[];
    };
}


export const exams: Exam[] = [
  {
    date: '03/07/2023',
    day: 'Monday',
    morning: {
      course: ['GES100.1', 'GES102.1'],
      time: '9:00 AM - 12:00 PM',
      venue: 'BASIC UNIT',
      supervisor: 'GES Unit',
      lecturers: ['GES Unit'],
      invigilators: ['GES Unit'],
    }
  },
  {
      date: '04/07/2023',
      day: 'Tuesday',
      afternoon: {
        course: 'CSC 395.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Prof. P.O. Asagba',
        lecturers: ['Prof. P.O. Asagba', 'Dr. M.O Musa', 'Dr. R. S. Ogunsakin'],
        invigilators: ['Prof. P.O. Asagba', 'Dr. M.O Musa', 'Dr. R. S. Ogunsakin', 'Bary', 'Sophia'],
      },
    },
    {
      date: '05/07/2023',
      day: 'Wednesday',
      morning: {
        course: ['STA 370.1'],
        time: '9:00 AM - 12:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Dr. L.U. Oghenekaro',
        lecturers: ['MATHS DEPT'],
        invigilators: ['Dr. L.U. Oghenekaro', 'Bary', 'Abigal,'],
      },
      afternoon: {
        course: 'CSC 396.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Dr. E.E. Ogheneovo',
        lecturers: ['Dr. E.E. Ogheneovo', 'Prof. B.O. Eke', 'Dr. B.B. Baridam', 'Dr. R. S.Ogunsakin'],
        invigilators: ['Dr. E.E. Ogheneovo', 'Prof. B.O. Eke', 'Dr. B.B. Baridam', 'Dr. R. S.Ogunsakin', 'West', 'Wisdom,'],
      },
  },
  {
      date: '06/07/2023',
      day: 'Thursday',
      morning: {
        course: ['CSC 496.1'],
        time: '9:00 AM - 12:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Prof. L. N. Onyejegbu',
        lecturers: ['Prof. L. N. Onyejegbu, Dr. U.A. Okengwu, Dr. L.U. Oghenekaro'],
        invigilators: ['Prof. L. N. Onyejegbu, Dr. U.A. Okengwu, Dr. L.U. Oghenekaro, Wisdom, Ekeocha'],
      },
      afternoon: {
        course: 'CSC 394.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Dr. F. E. Onuodu',
        lecturers: ['Dr. F. E. Onuodu, Dr. B.B. Baridam, Mr. E. Wobidi'],
        invigilators: ['Dr. F. E. Onuodu, Dr. B.B. Baridam, Mr. E. Wobidi, Sophia, Ekeocha'],
      },
  },
  {
        date: '07/07/2023',
        day: 'Friday',
        morning: {
        course: ['GES 300.1'],
        time: '9:00 AM - 12:00 PM',
        venue: 'BASIC UNIT',
        supervisor: 'GES UNIT',
        lecturers: ['GES UNIT'],
        invigilators: ['GES UNIT'],
      },
      afternoon: {
        course: 'CSC 480.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Prof. P.O. Asagba',
        lecturers: ['Prof. P.O. Asagba, Dr. M.O Musa, Mr. E. Wobidi'],
        invigilators: ['Prof. P.O. Asagba, Dr. M.O Musa, Mr. E. Wobidi, Wisdom, Adams'],
      },
  },
  {
        date: '11/07/2023',
        day: 'Tuesday',
      afternoon: {
        course: 'CSC 482.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Prof. C. Ugwu',
        lecturers: ['Prof. C. Ugwu, Mr. E. Wobidi'],
        invigilators: ['Prof. C. Ugwu, Mr. E. Wobidi, Abigal, Ekeocha'],
      },
  },
  {
        date: '12/07/2023',
        day: 'Wednesday',
      afternoon: {
        course: 'GES 400.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Dr. F. E. Onuodu',
        lecturers: ['Dr. F. E. Onuodu, Dr. U.A. Okengwu, Dr. P. Enyindah'],
        invigilators: ['Dr. F. E. Onuodu, Dr. U.A. Okengwu, Dr. P. Enyindah, Bari, Abigal'],
      },
  },
  {
        date: '13/07/2023',
        day: 'Thursday',
      afternoon: {
        course: 'CSC 382.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Prof. B.O. Eke',
        lecturers: ['Prof. B.O. Eke, Dr. F. Egbono, Dr. L. C. Ochei'],
        invigilators: ['Prof. B.O. Eke, Dr. F. Egbono, Dr. L. C. Ochei, Adam, West'],
      },
  },
  {
        date: '14/07/2023',
        day: 'Friday',
      afternoon: {
        course: 'CSC 483.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Dr. E.E. Ogheneovo',
        lecturers: ['Dr. E.E. Ogheneovo, Dr. R. S. Ogunsakin, Dr. C. B. Marcus'],
        invigilators: ['Dr. E.E. Ogheneovo, Dr. R. S. Ogunsakin, Dr. C. B. Marcus, Bari, Abigal'],
      },
  },
  {
        date: '15/07/2023',
        day: 'Saturday',
      afternoon: {
        course: 'CSC 483.1',
        time: '9:00 AM - 12:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Prof. L. N. Onyejegbu',
        lecturers: ['Prof. L. N. Onyejegbu, Dr. L.U. Oghenekaro, Dr. L. C. Ochei, Dr. P. Enyindah'],
        invigilators: ['Prof. L. N. Onyejegbu, Dr. L.U. Oghenekaro, Dr. L. C. Ochei, Dr. P. Enyindah, Adam, Bari'],
      },
  },
  {
        date: '17/07/2023',
        day: 'Monday',
      morning: {
        course: 'MTH 110.1',
        time: '9:00 AM - 12:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Dr. C. B. Marcus',
        lecturers: ['MATHS DEPT'],
        invigilators: ['Dr. C. B. Marcus, Wisdom, Sophia'],
      },
  },
  {
        date: '19/07/2023',
        day: 'Wednesday',
        morning: {
        course: ['PHY 101.1'],
        time: '9:00 AM - 12:00 PM',
        venue: 'CSC HALL2',
        supervisor: 'Mr. A.O. Ugbari',
        lecturers: ['PHYSICS DEPT'],
        invigilators: ['Mr. A.O. Ugbari, Wisdom, Bari'],
      },
      afternoon: {
        course: 'CSC 498.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Prof. B.O. Eke',
        lecturers: ['Prof. B.O. Eke, Mr. A.O. Ugbari'],
        invigilators: ['Prof. B.O. Eke, Mr. A.O. Ugbari, Ekeocha, Adams'],
      },
  },
  {
        date: '21/07/2023',
        day: 'Friday',
        morning: {
        course: ['FSB 101.1'],
        time: '9:00 AM - 12:00 PM',
        venue: 'MBA 2',
        supervisor: 'Dr. C. B. Marcus',
        lecturers: ['Biology DEPT'],
        invigilators: ['Dr. C. B. Marcus, Wisdom, Bary'],
      },
      afternoon: {
        course: 'CSC 397.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Dr. U.A. Okengwu',
        lecturers: ['Dr. U.A. Okengwu, Dr. L.U. Oghenekaro'],
        invigilators: ['Dr. U.A. Okengwu, Dr. L.U. Oghenekaro, Wisdom, Dr. N. Emecheta'],
      },
  },
  {
        date: '24/07/2023',
        day: 'Monday',
      afternoon: {
        course: 'CHM 130.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Dr. M. O. Musa',
        lecturers: ['CHEMISTRY DEPT'],
        invigilators: ['Dr. M. O. Musa, Sophia, Wisdom'],
      },
  },
  {
        date: '26/07/2023',
        day: 'Wednesday',
      morning: {
        course: 'MTH 120.1',
        time: '9:00 AM - 12:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Dr. P. Enyindah',
        lecturers: ['MATHS DEPT'],
        invigilators: ['Dr. P. Enyindah, Ekeocha, Adam'],
      },
  },
  {
        date: '27/07/2023',
        day: 'Thursday',
      morning: {
        course: 'CSC 288.1',
        time: '9:00 AM - 12:00 PM',
        venue: 'INFOTECH/CYBER HALL',
        supervisor: 'Mr. A.O. Ugbari',
        lecturers: ['Mr. A.O. Ugbari, Dr. P. Enyindah'],
        invigilators: ['Mr. A.O. Ugbari, Dr. P. Enyindah, Ekeocha, Sophia'],
      },
  },
  {
        date: '28/07/2023',
        day: 'Friday',
      afternoon: {
        course: 'CSC 283.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'MBA 1 / 2',
        supervisor: 'Dr. F. E. Onuodu',
        lecturers: ['Dr. F. E. Onuodu, Dr. U.A. Okengwu, Dr. C. B. Marcus'],
        invigilators: ['Dr. F. E. Onuodu, Dr. U.A. Okengwu, Dr.C. B. Marcus, Bari, Abigal'],
      },
  },
  {
      date: '29/07/2023',
      day: 'Saturday',
      morning: {
        course: ['MTH 210.1'],
        time: '9:00 AM - 12:00 PM',
        venue: 'MBA 1 / 2',
        supervisor: 'Dr. R.S. Ogunsakin',
        lecturers: ['MATHS DEPT'],
        invigilators: ['Dr. R.S. Ogunsakin, Dr. N. Emecheta, Ekeocha'],
      },
      afternoon: {
        course: 'CSC 486.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'CSC Hall2',
        supervisor: 'Dr. U. A. Okengwu',
        lecturers: ['Dr. U. A. Okengwu, Mr. E. Wobidi'],
        invigilators: ['Dr. U. A. Okengwu, Mr. E. Wobidi, Wisdom, Abigal'],
      },
  },
  {
        date: '31/07/2023',
        day: 'Monday',
        morning: {
        course: ['CSC 481.1'],
        time: '9:00 AM - 12:00 PM',
        venue: 'CSC HALL2',
        supervisor: 'Dr. B.B. Baridam',
        lecturers: ['Dr. B.B. Baridam, Dr. L. U. Oghenekaro, Dr. L. C. Ochei'],
        invigilators: ['Dr. R.S. Ogunsakin, Dr. N. Emecheta, Ekeocha'],
      },
      afternoon: {
        course: 'CSC CSC 284.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'MBA 1 / 2',
        supervisor: 'Dr. F. Egbono',
        lecturers: ['Dr. F. Egbono, Dr. L.U. Oghenekaro, Dr. L. C. Ochei'],
        invigilators: ['Dr. F. Egbono, Dr. L.U. Oghenekaro, Dr. L. C. Ochei, Wisdom, Dr. N. Emecheta, Bari'],
      },
  },
  {
        date: '02/08/2023',
        day: 'Wednesday',
      afternoon: {
        course: 'STA 260.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'INFOTECH/CYBER HALL',
        supervisor: 'Dr. U. A. Okengwu',
        lecturers: ['MATHS DEPT'],
        invigilators: ['Dr. U. A. Okengwu, West, Sophia'],
      },
  },
  {
        date: '03/08/2023',
        day: 'Thursday',
        morning: {
        course: ['CSC 281.1'],
        time: '9:00 AM - 12:00 PM',
        venue: 'INFOTECH/CYBER HALL',
        supervisor: 'Dr. F. Egbono',
        lecturers: ['Dr. F. Egbono, Dr. M. O. Musa'],
        invigilators: ['Dr. F. Egbono, Dr. M. O. Musa, Adam, Ekeocha'],
      },
      afternoon: {
        course: 'MTH 270.1',
        time: '2:00 PM - 5:00 PM',
        venue: 'INFOTECH/CYBER HALL',
        supervisor: 'Mr. E. Wobidi',
        lecturers: ['MATHS DEPT'],
        invigilators: ['Mr. E. Wobidi, Wisdom, Abigal'],
      },
  },
  {
        date: '05/08/2023',
        day: 'Saturday',
      morning: {
        course: 'CSC 280.1',
        time: '9:00 AM - 12:00 PM',
        venue: 'MBA 1 & 2',
        supervisor: 'Prof. P.O. Asagba',
        lecturers: ['All Lecturers'],
        invigilators: ['R.S. Ogunsakin, A. O. Ugbari, C.B. Marcus, L.U. Oghenekaro, M.O. Musa,Abigal, West, Bary'],
      },
  },
  // Add more exam objects forr other dates...
];