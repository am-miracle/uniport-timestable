// interface GeneralData {
//     time: string;
//     course: string[];
// }

// export const generalData: GeneralData[] = [
//     {time: "8 - 9am", course: [
//         "GES 100.1 (TETFUND 7 in 1)",
//         "CSC 382.1 (MBS 15)",
//         "CSC483.1(MBS22)"
//     ]}
// ]

type Subject = {
    name?: string;
};
type Schedule = {
  [key: string]: Subject[][];
};

  export const schedule: Schedule = {
    Monday: [
        [
          { name: 'GES 100.1 (TETFUND 7 in 1)' },
          { name: 'CSC 382.1 (MBS 15)' },
          { name: 'CSC483.1(MBS22)' },
        ],
        [
          { name: 'GES100.1 (TETFUND 7 in1)' },
          { name: 'CSC 394.1(CSC HALL2)' },
          { name: 'CSC483.1(MBS22)' },
        ],
        [
          { name: 'MTH110.1(CHALL,MBA1,2)' },
          { name: 'CSC 394.1(CSC HALL2)' },
        ],
        [
          { name: 'MTH110.1(FOS,CHALL,MBA1,2)' },
        ],
        [
          { name: 'STA 260.1 (MBA 2, MTH HALL)' },
          { name: 'CSC 397.1 (MBS 22)' },
        ],
        [
          { name: 'CSC486.1(CSC HALL 2)' },
          { name: 'CSC 397.1 (MBS 22)' },
          { name: 'STA 260.1 (MBA 2, MTH HALL)' },
        ],
        [
          { name: 'CSC486.1(CSC HALL 2)' },
          { name: 'STA 370.1 (MBA 2)' },
        ],
        [
          { name: 'STA 370.1 (MBA 2)' },
          { name: 'CSC 281.1 (CSC HALL 2)' },
        ],
        [
          { name: 'PHY101.1(FoS,CHALL,MBA1,2)' },
          { name: 'MTH 270.1 (CSC HALL 2, MTH HALL)' },
        ],
        [
          { name: 'CSC 396.1 (MBS 22)' },
          { name: 'MTH120.1(CHALL,MBA1,2)' },
        ],
      ],
    Tuesday: [
        [
          { name: 'CSC480.1(CSC HALL 2)' },
        ],
        [
          { name: 'GES100.1 (TETFUND 7 in1)' },
          { name: 'CSC482.1(MBS22)' },
          { name: 'CSC 395.1 (CSC HALL 2)' },
        ],
        [
          { name: 'CSC482.1(MBS22)' },
          { name: 'CSC283.1(CSC HALL 2)' },
        ],
        [
          { name: 'CSC283.1(CSC HALL 2)' },
        ],
        [
          { name: 'CSC 280.1 (MBA 2)' },
          { name: 'FSB 101.1(FoS,CHALL,MBA1,2)' },
        ],
        [
          { name: 'FSB 101.1(FoS,CHALL,MBA1,2)' },
          { name: 'CSC 280.1 (MBA 2)' },
          { name: 'CSC483.1(CSC HALL2)' },
        ],
        [
          { name: 'PHY 101.1 (FoS,CHALL,MBA1,2)' },
          { name: 'CSC 288.1 (CSC 2)' },
          { name: 'GES 300.1 (CBN HALL)' },
        ],
        [
          { name: 'fGES 300.1 (CBN HALL)' },
          { name: 'PHY 101.1 (FoS,CHALL,MBA1,2)' },
        ],
        [
          { name: 'CHM130.1(FoS,CHALL,MBA1,2)' },
          { name: 'CSC 284.1 (CSC HALL2)' },
        ],
        [
          { name: 'CHM130.1(FoS,CHALL,MBA1,2)' },
          { name: 'CSC 284.1 (CSC HALL2)' },
        ],
      ],
    Wednesday: [
        [
          { name: 'MTH 120.1(FoS,CHALL,MBA1,2)' },
        ],
        [
          { name: 'MTH 120.1(FoS,CHALL,MBA1,2)' },
        ],
        [
          { name: 'CSC 382.1 (CSC HALL2)' },
        ],
        [
          { name: 'FSB 101.1 (FoS,CHALL,MBA1,2)' },
          { name: 'CSC 382.1 (CSC HALL2)' },
        ],
        [
          { name: 'CSC498.1(CSC HALL2)' },
        ],
        [
          { name: 'CSC480.1(CSC HALL2)' },
        ],
        [
          { name: 'GES 100.1 (CBN Hall)' },
          { name: 'MTH 210.1 (MBA1,2)' },
          { name: 'CSC480.1(CSC HALL2)' },
          { name: 'CSC 280.1 (MBA 3)' },
        ],
        [
          { name: 'MTH 210.1 (MBA1,2)' },
          { name: 'GES 400.1(MBS 22)' },
        ],
        [
          { name: 'SPORTS' },
        ],
        [
          { name: 'SPORTS' },
        ],
      ],
    Thursday: [
        [
          { name: 'CSC 284.1 (CSC HAll 2)' },
          { name: 'MTH110.1(FOS,CHALL,MBA1)' },
        ],
        [
          { name: 'CSC180.1(CSC Hall 2)' },
          { name: 'CSC 395.1 (MBA 4)' },
        ],
        [
          { name: 'CSC481.1(MBS22)' },
          { name: 'CSC 396.1 (CSC HALL2)' },
        ],
        [
          { name: 'CSC 396.1 (CSC HALL2)' },
        ],
        [
          { name: 'MTH 270.1 (CSC HALL 2, MTH HALL)' },
        ],
        [
          { name: 'MTH 270.1 (CSC HALL 2, MTH HALL)' },
        ],
        [
          { name: 'CSC 397.1 (CSC HALL 2)' },
        ],
        [
          { name: 'PHY101.1(FoS,CHALL,MBA1,2)' },
          { name: 'CSC 281.1 (CSC HALL 2)' },
        ],
        [
          { name: 'CSC482.1(CSC HALL 2)' },
          { name: 'CHM130.1(FoS,CHALL,MBA1,2)' },
        ],
      ],
    Friday: [
        [
          { name: 'CSC 394.1 (CSC HALL2)' }
        ],
        [
          { name: 'STA 260.1 (MBA 2, MTH HALL)' },
          { name: 'CSC486.1(CSC HALL 2)' },
        ],
        [
          { name: 'FSB101.1 (FoS,CHALL,MBA1)' },
          { name: 'CSC 288.1 (MBA 2)' },
          { name: 'CSC498.1 (CSC HALL 2)' },
        ],
        [
          { name: 'PHY 101.1 (FoS,CHALL,MBA1,2)' },
          { name: 'CSC498.1(CSC HALL 2)' },
        ],
        [
          { name: 'PHY 101.1 (FoS,CHALL,MBA1,2)' },
          { name: 'CSC481.1(CSC HALL 2)' },
        ],
        [
          { name: 'JUMAT' },
        ],
        [
          { name: 'CSC 283.1 (MBA 1)' },
          { name: 'CSC 382.1 (MBA 2)' },
        ],
        [
          { name: 'CSC 283.1 (MBA 1)' },
        ],
        [
          { name: 'MTH 210.1(MTH, MBA 2)' },
          { name: 'GES 400.1(MBS 22)' },
        ],
        [
          { name: 'CSC180.1(CSC Hall 2)' },
        ],
      ],
    Saturday: [
        [
          { name: 'GES 100.1 (PS HALL)' },
        ],
        [
          { name: 'GES 100.1 (PS HALL)' },
        ],
        [
          { name: 'GES 102.1 (MBA 1)' },
        ],
        [
          { name: '' },
        ],
        [
          { name: '' },
        ],
        [
          { name: 'GES 300.1 (MBA 1)' },
        ],
        [
          { name: '' },
        ],
        [
          { name: '' },
          { name: '' },
          { name: '' },
        ],
        [
          { name: '' },
          { name: '' },
        ],
      ],
  };