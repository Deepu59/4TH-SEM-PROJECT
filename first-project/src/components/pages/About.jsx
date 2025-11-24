import React from 'react'
// import Img from "../assets/Img.png";


const About = () => {
  return (
    <div className="max-w-6xl mx-auto font-mono px-6 py-10 mt-30">

      {/* TOP HEADER + MAIN IMAGE */}
      <p className="text-2xl text-center font-semibold">
        DS is better than your best to-do list
      </p>

      {/* <div className="flex justify-center mt-6">
        <img
          className="h-140 object-contain"
          src={Img}
          alt=""
        />
      </div> */}

      {/* 2 COLUMN SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT */}
        <div>
          <h1 className="text-4xl font-bold mb-5">
            Assign tasks and manage deadlines
          </h1>

          <p className="text-lg text-gray-600 mb-6">
            DS’s advanced checklists give you the power to add more context 
            to your tasks by assigning team members and due dates to checklist
            items, increasing visibility and keeping your team accountable.
          </p>

          <button className="px-6 py-3 border border-gray-400 rounded-lg hover:bg-gray-100 transition">
            Check out advanced checklists
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://images.ctfassets.net/rz1oowkt5gyp/1QBdXJMIsJVnItwGRMz79o/9265e6a3f8c8c4a9a0ea8bc15dbbf982/Task_Management_-_Checklist2x.png?w=1140&fm=webp"
            alt="task"
            className="w-[420px] rounded-lg shadow-md"
          />
        </div>

      </div>

    </div>
  )
}

export default About
