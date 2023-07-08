import React from 'react'
import Timetable from '../../components/Timetable';

const UniportTimetable = () => {
  return (
    <section className="py-6">
        <div className="container flex flex-col items-center gap-4">
        <h1 className="text-2xl mb-2 text-center">
          UNIVERSITY OF PORT HARCOURT
          FACULTY OF SCIENCE
          DEPARTMENT OF COMPUTER SCIENCE
          (BSc FULL-TIME) FIRST SEMESTER LECTURE TIMETABLE 2021-2023
        </h1>
          <div className="w-full overflow-x-scroll">
            <Timetable />
          </div>
        </div>
    </section>
  )
}

export default UniportTimetable;

// space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32