
export interface DataProps {
  day: string;
  schedule: {
    time: string;
    course: string;
    venue?: string;
    lecturers?: string[];
    details?: string;
  }[];
}
export const FourthData: DataProps[] = [
    {
      day: 'Monday',
      schedule: [
        { time: '8AM - 9AM', course: 'CSC 483.1', venue: "mbs 22", lecturers: [
          "Dr. E.E. Ogheneovo",
          "Dr. R. S. Ogunsakin",
          "Dr. C. B. Marcus"
        ] },
        { time: '9AM - 10AM', course: 'CSC 483.1', venue: "mbs 22", lecturers: [
          "Dr. E.E. Ogheneovo",
          "Dr. R. S. Ogunsakin",
          "Dr. C. B. Marcus"
        ] },
        { time: '10AM - 11AM', course: '' },
        { time: '11AM - 12PM', course: '' },
        { time: '12PM - 1PM', course: '' },
        { time: '1PM - 2PM', course: 'CSC 486.1', venue: "CSC hall 2", lecturers: [
          "Dr. U. A. Okengwu",
          "Mr. E. Wobidi",
        ] },
        { time: '2PM - 3PM', course: 'CSC 486.1', venue: "CSC hall 2", lecturers: [
          "Dr. U. A. Okengwu",
          "Mr. E. Wobidi",
        ] },
        { time: '3PM - 4PM', course: '' },
        { time: '4PM - 5PM', course: '' },
        { time: '5PM - 6PM', course: '' },
      ],
    },
    {
      day: 'Tuesday',
      schedule: [
        { time: '8AM - 9AM', course: 'CSC 480.1', venue: "CSC hall 2", lecturers: [
          "Prof. P.O. Asagb",
          "Dr. M.O Musa",
          "Mr. E. Wobidi"
        ] },
        { time: '9AM - 10AM', course: 'CSC 482.1', venue: "mbs 22", lecturers: [
          "Mr. E. Wobidi",
          "Prof. C. Ugwu",
        ] },
        { time: '10AM - 11AM', course: 'CSC 482.1', venue: "mbs 22", lecturers: [
          "Mr. E. Wobidi",
          "Prof. C. Ugwu",
        ] },
        { time: '11AM - 12PM', course: '' },
        { time: '12PM - 1PM', course: '' },
        { time: '1PM - 2PM', course: 'CSC 483.1', venue: "CSC hall 2", lecturers: [
          "Dr. E.E. Ogheneovo",
          "Dr. R. S. Ogunsakin",
          "Dr. C. B. Marcus"
        ] },
        { time: '2PM - 3PM', course: '' },
        { time: '3PM - 4PM', course: '' },
        { time: '4PM - 5PM', course: '' },
        { time: '5PM - 6PM', course: '' },
      ],
    },
    {
      day: 'Wednesday',
      schedule: [
        { time: '8AM - 9AM', course: '' },
        { time: '9AM - 10AM', course: '' },
        { time: '10AM - 11AM', course: '' },
        { time: '11AM - 12PM', course: '' },
        { time: '12PM - 1PM', course: 'CSC 498.1', venue: "CSC hall 2", lecturers: [
          "Prof. B.O. Eke",
          "Mr. A.O. Ugbari",
        ] },
        { time: '1PM - 2PM', course: 'CSC 480.1', venue: "CSC hall 2", lecturers: [
          "Prof. P.O. Asagba",
          "Dr. M.O Musa",
          "Mr. E. Wobidi"
        ] },
        { time: '2PM - 3PM', course: 'CSC 480.1', venue: "CSC hall 2", lecturers: [
          "Prof. P.O. Asagba",
          "Dr. M.O Musa",
          "Mr. E. Wobidi"
        ] },
        { time: '3PM - 4PM', course: 'GES 400.1', venue: "CSC hall 2", lecturers: [
          "Dr. F. E. Onuodu",
          "Dr. U.A. Okengwu",
          "Dr. P. Enyindah"
        ] },
        { time: '4PM - 5PM', course: '' },
        { time: '5PM - 6PM', course: '' },
      ],
    },
    {
      day: 'Thursday',
      schedule: [
        { time: '8AM - 9AM', course: '' },
        { time: '9AM - 10AM', course: '' },
        { time: '10AM - 11AM', course: 'CSC 496.1', venue: "mbs 15", lecturers: [
          "Prof. L. N. Onyejegbu,",
          "Dr. L.U. Oghenekaro",
          "Dr. U.A. Okengwu"
        ] },
        { time: '11AM - 12PM', course: 'CSC 481.1', venue: "mbs 22", lecturers: [
          "Dr. B.B. Baridam",
          "Dr. L.U. Oghenekaro",
          "Dr. L. C. Ochei"
        ] },
        { time: '12PM - 1PM', course: '' },
        { time: '1PM - 2PM', course: '' },
        { time: '2PM - 3PM', course: '' },
        { time: '3PM - 4PM', course: '' },
        { time: '4PM - 5PM', course: '' },
        { time: '5PM - 6PM', course: 'CSC 482.1', venue: "CSC hall 2", lecturers: [
          "Mr. E. Wobidi",
          "Prof. C. Ugwu",
        ] },
      ],
    },
    {
      day: 'Friday',
      schedule: [
        { time: '8AM - 9AM', course: '' },
        { time: '9AM - 10AM', course: 'CSC 486.1', venue: "CSC hall 2", lecturers: [
          "Dr. U. A. Okengwu",
          "Mr. E. Wobidi",
        ] },
        { time: '10AM - 11AM', course: 'CSC 498.1', venue: "CSC hall 2", lecturers: [
          "Prof. B.O. Eke",
          "Mr. A.O. Ugbari",
          "Ekeocha Adams"
        ] },
        { time: '11AM - 12PM', course: 'CSC 496.1', venue: "CSC hall 2", lecturers: [
          "Prof. L. N. Onyejegbu,",
          "Dr. L.U. Oghenekaro",
          "Dr. U.A. Okengwu"
        ] },
        { time: '12PM - 1PM', course: 'CSC 481.1', venue: "CSC hall 2", lecturers: [
          "Dr. B.B. Baridam",
          "Dr. L.U. Oghenekaro",
          "Dr. L. C. Ochei"
        ] },
        { time: '1PM - 2PM', course: '' },
        { time: '2PM - 3PM', course: '' },
        { time: '3PM - 4PM', course: '' },
        { time: '4PM - 5PM', course: 'GES 400.1', venue: "mbs 22", lecturers: [
          "Dr. F. E. Onuodu",
          "Dr. U.A. Okengwu",
          "Dr. P. Enyindah"
        ] },
        { time: '5PM - 6PM', course: '' },
      ],
    },
]




export const FirstData: DataProps[] = [
  {
        day: 'Monday',
        schedule: [
          { time: '8AM - 9AM', course: 'GES 100.1', venue: "TETFUND 7 in 1", lecturers: [
           "" ] },
          { time: '9AM - 10AM', course: 'GES 100.1', venue: "TETFUND 7 in 1", lecturers: [''] },
          { time: '10AM - 11AM', course: 'MTH110.1', venue: "CHALL,MBA1,2",},
          { time: '11AM - 12PM', course: 'MTH110.1', venue: "CHALL,MBA1,2", },
          { time: '12PM - 1PM', course: '' },
          { time: '1PM - 2PM', course: '', venue:""},
          { time: '2PM - 3PM', course: '', venue: ""},
          { time: '3PM - 4PM', course: '' },
          { time: '4PM - 5PM', course: 'PHY101.1', venue: "(FoS,CHALL,MBA1,2", lecturers: [''] },
          { time: '5PM - 6PM', course: '' },
        ],
      },
      {
        day: 'Tuesday',
        schedule: [
          { time: '8AM - 9AM', course: '', venue: ""},
          { time: '9AM - 10AM', course: 'GES100.1', venue: "TETFUND 7 in1"},
          { time: '10AM - 11AM', course: ''},
          { time: '11AM - 12PM', course: '' },
          { time: '12PM - 1PM', course: 'FSB 101.1' },
          { time: '1PM - 2PM', course: 'CSC 483.1', venue: "FoS,CHALL,MBA1,2" },
          { time: '2PM - 3PM', course: 'PHY 101.1', venue: "FoS,CHALL,MBA1,2" },
          { time: '3PM - 4PM', course: 'PHY 101.1', venue: "FoS,CHALL,MBA1,2" },
          { time: '4PM - 5PM', course: 'CHM 130.1', venue: "FoS,CHALL,MBA1,2" },
          { time: '5PM - 6PM', course: 'CHM 130.1', venue: "FoS,CHALL,MBA1,2" },
        ],
      },
      {
        day: 'Wednesday',
        schedule: [
          { time: '8AM - 9AM', course: 'MTH 120.1', venue: "FoS,CHALL,MBA1,2" },
          { time: '9AM - 10AM', course: 'MTH 120.1', venue: "FoS,CHALL,MBA1,2" },
          { time: '10AM - 11AM', course: '' },
          { time: '11AM - 12PM', course: 'FSB 101.1', venue: "FoS,CHALL,MBA1,2" },
          { time: '12PM - 1PM', course: ''},
          { time: '1PM - 2PM', course: '' },
          { time: '2PM - 3PM', course: 'GES 100.1', venue: "CBN Hall" },
          { time: '3PM - 4PM', course: ''},
          { time: '4PM - 5PM', course: '' },
          { time: '5PM - 6PM', course: '' },
        ],
      },
      {
        day: 'Thursday',
        schedule: [
          { time: '8AM - 9AM', course: 'MTH 110.1', venue: 'FOS,CHALL,MBA1' },
          { time: '9AM - 10AM', course: '' },
          { time: '10AM - 11AM', course: 'CSC 180.1', venue: "CSC hall 2" },
          { time: '11AM - 12PM', course: ''},
          { time: '12PM - 1PM', course: '' },
          { time: '1PM - 2PM', course: '' },
          { time: '2PM - 3PM', course: '' },
          { time: '3PM - 4PM', course: '' },
          { time: '4PM - 5PM', course: 'PHY 101.1', venue: 'FOS,CHALL,MBA1' },
          { time: '5PM - 6PM', course: 'CHM 130.1', venue: "FOS,CHALL,MBA1" },
        ],
      },
      {
        day: 'Friday',
        schedule: [
          { time: '8AM - 9AM', course: '' },
          { time: '9AM - 10AM', course: ''},
          { time: '10AM - 11AM', course: 'FSB 101.1', venue: "FOS,CHALL,MBA1" },
          { time: '11AM - 12PM', course: 'PHY 101.1', venue: "FOS,CHALL,MBA1" },
          { time: '12PM - 1PM', course: 'PHY 101.1', venue: "FOS,CHALL,MBA1" },
          { time: '1PM - 2PM', course: '' },
          { time: '2PM - 3PM', course: '' },
          { time: '3PM - 4PM', course: '' },
          { time: '4PM - 5PM', course: ''},
          { time: '5PM - 6PM', course: 'CSC180.1', venue: "CSC Hall 2" },
        ],
      },
  ]

  export const SecondData: DataProps[] = [
    {
      day: 'Monday',
      schedule: [
        { time: '8AM - 9AM', course: ''},
        { time: '9AM - 10AM', course: ''},
        { time: '10AM - 11AM', course: '' },
        { time: '11AM - 12PM', course: '' },
        { time: '12PM - 1PM', course: 'STA 260.1', venue: "MTH HALL" },
        { time: '1PM - 2PM', course: 'STA 260.1', venue: "MTH HALL"},
        { time: '2PM - 3PM', course: ''},
        { time: '3PM - 4PM', course: 'CSC 281.1', venue:'CSC HALL 2' },
        { time: '4PM - 5PM', course: 'MTH 270.1', venue:'CSC HALL 2' },
        { time: '5PM - 6PM', course: '' },
      ],
    },
    {
      day: 'Tuesday',
      schedule: [
        { time: '8AM - 9AM', course: ''},
        { time: '9AM - 10AM', course: ''},
        { time: '10AM - 11AM', course: 'CSC 283.1', venue: "CSC hall 2"},
        { time: '11AM - 12PM', course: 'CSC 283.1', venue: "CSC hall 2" },
        { time: '12PM - 1PM', course: 'CSC 280.1', venue: "MBA 2" },
        { time: '1PM - 2PM', course: 'CSC 280.1', venue: "MBA 2"},
        { time: '2PM - 3PM', course: 'CSC 288.1', venue: "CSC hall 2" },
        { time: '3PM - 4PM', course: '' },
        { time: '4PM - 5PM', course: 'CSC 284.1', venue: "CSC hall 2"},
        { time: '5PM - 6PM', course: 'CSC 284.1', venue: "CSC hall 2" },
      ],
    },
    {
      day: 'Wednesday',
      schedule: [
        { time: '8AM - 9AM', course: '' },
        { time: '9AM - 10AM', course: '' },
        { time: '10AM - 11AM', course: '' },
        { time: '11AM - 12PM', course: '' },
        { time: '12PM - 1PM', course: ''},
        { time: '1PM - 2PM', course: ''},
        { time: '2PM - 3PM', course: 'MTH 210.1', venue: "MBA1,2" },
        { time: '3PM - 4PM', course: 'MTH 210.1', venue: "MBA1,2" },
        { time: '4PM - 5PM', course: '' },
        { time: '5PM - 6PM', course: '' },
      ],
    },
    {
      day: 'Thursday',
      schedule: [
        { time: '8AM - 9AM', course: 'CSC 284.1', venue: "CSC hall 2" },
        { time: '9AM - 10AM', course: '' },
        { time: '10AM - 11AM', course: ''},
        { time: '11AM - 12PM', course: ''},
        { time: '12PM - 1PM', course: '' },
        { time: '1PM - 2PM', course: 'MTH 270.1', venue: "CSC hall 2" },
        { time: '2PM - 3PM', course: 'MTH 270.1', venue: "CSC hall 2" },
        { time: '3PM - 4PM', course: '' },
        { time: '4PM - 5PM', course: 'CSC 281.1', venue: "CSC hall 2" },
        { time: '5PM - 6PM', course: ''}
      ],
    },
    {
      day: 'Friday',
      schedule: [
        { time: '8AM - 9AM', course: '' },
        { time: '9AM - 10AM', course: 'STA 260.1', venue: "MBA 2, MTH HALL" },
        { time: '10AM - 11AM', course: 'CSC 288.1', venue: "MBA 2" },
        { time: '11AM - 12PM', course: ''},
        { time: '12PM - 1PM', course: ''},
        { time: '1PM - 2PM', course: '' },
        { time: '2PM - 3PM', course: 'CSC 283.1', venue: "MBA 1" },
        { time: '3PM - 4PM', course: 'CSC 283.1', venue: "MBA 1" },
        { time: '4PM - 5PM', course: 'MTH 210.1', venue: "MTH, MBA 1" },
        { time: '5PM - 6PM', course: '' },
      ],
    },
]



export const ThirdData: DataProps[] = [
  {
    day: 'Monday',
    schedule: [
      { time: '8AM - 9AM', course: 'CSC 382.1', venue: "MBS 15" },
      { time: '9AM - 10AM', course: 'CSC 394.1', venue: "CSC HALL 2"},
      { time: '10AM - 11AM', course: 'CSC 394.1', venue: "CSC HALL 2" },
      { time: '11AM - 12PM', course: '' },
      { time: '12PM - 1PM', course: 'CSC 397.1', venue: "MBS 22" },
      { time: '1PM - 2PM', course: 'CSC 397.1', venue: "MBS 22" },
      { time: '2PM - 3PM', course: 'STA 370.1', venue: 'MBA 2'},
      { time: '3PM - 4PM', course: 'CSC 281.1', venue:'CSC HALL 2' },
      { time: '4PM - 5PM', course: ''},
      { time: '5PM - 6PM', course: 'CSC 396.1', venue:'MBS 22' },
    ],
  },
  {
    day: 'Tuesday',
    schedule: [
      { time: '8AM - 9AM', course: ''},
      { time: '9AM - 10AM', course: 'CSC 395.1', venue: "CSC hall 2"},
      { time: '10AM - 11AM', course: ''},
      { time: '11AM - 12PM', course: ''},
      { time: '12PM - 1PM', course: ''},
      { time: '1PM - 2PM', course: 'CSC 280.1', venue: "MBA 2"},
      { time: '2PM - 3PM', course: 'GES 300.1', venue: "CBN HALL" },
      { time: '3PM - 4PM', course: 'GES 300.1', venue: "CBN HALL" },
      { time: '4PM - 5PM', course: ''},
      { time: '5PM - 6PM', course: ''},
    ],
  },
  {
    day: 'Wednesday',
    schedule: [
      { time: '8AM - 9AM', course: '' },
      { time: '9AM - 10AM', course: '' },
      { time: '10AM - 11AM', course: 'CSC 382.1', venue: "CSC hall 2" },
      { time: '11AM - 12PM', course: 'CSC 382.1', venue: "CSC hall 2" },
      { time: '12PM - 1PM', course: ''},
      { time: '1PM - 2PM', course: ''},
      { time: '2PM - 3PM', course: ''},
      { time: '3PM - 4PM', course: ''},
      { time: '4PM - 5PM', course: '' },
      { time: '5PM - 6PM', course: '' },
    ],
  },
  {
    day: 'Thursday',
    schedule: [
      { time: '8AM - 9AM', course: 'CSC 284.1', venue: "CSC hall 2" },
      { time: '9AM - 10AM', course: 'CSC 395.1',venue: 'MBA 4'},
      { time: '10AM - 11AM', course: 'CSC 395.1', venue: 'MBA 4'},
      { time: '11AM - 12PM', course: ''},
      { time: '12PM - 1PM', course: 'CSC 396.1', venue: "CSC hall 2" },
      { time: '1PM - 2PM', course: ''},
      { time: '2PM - 3PM', course: ''},
      { time: '3PM - 4PM', course: 'CSC 397.1', venue: "CSC hall 2" },
      { time: '4PM - 5PM', course: ''},
      { time: '5PM - 6PM', course: ''}
    ],
  },
  {
    day: 'Friday',
    schedule: [
      { time: '8AM - 9AM', course: 'CSC 394.1', venue: "CSC hall 2" },
      { time: '9AM - 10AM', course: ''},
      { time: '10AM - 11AM', course: ''},
      { time: '11AM - 12PM', course: ''},
      { time: '12PM - 1PM', course: ''},
      { time: '1PM - 2PM', course: '' },
      { time: '2PM - 3PM', course: 'CSC 382.1', venue: "MBA 2" },
      { time: '3PM - 4PM', course: ''},
      { time: '4PM - 5PM', course: ''},
      { time: '5PM - 6PM', course: '' },
    ],
  },
]