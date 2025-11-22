import React from 'react'

const About = () => {
  return (
    <div className=' max-w-6xl justify-between items-center font-mono '>
      <p className='text-2xl text-center ml-40 mt-30 font-semibold'>DS is better than your best to-do list</p>
        <img className='h-120 ml-77 mt-5' src="https://images.ctfassets.net/rz1oowkt5gyp/2clZ8uKx6nW3ZVEa8PJKBN/8cf2d006e6aaad1992091fcfdc9b80f8/Task_Management_Board2x.png?w=1140&fm=webp" alt="" />

      <div className='max-w-7xl mx-auto flex justify-between items-center mt-30'>
        <p className='ml-50 font-semibold'>Trello’s advanced checklists give you the power to add more context to your tasks by assigning team members and due dates to checklist items, increasing visibility and keeping your team accountable.</p>
        <img className='h-100' src="https://images.ctfassets.net/rz1oowkt5gyp/1QBdXJMIsJVnItwGRMz79o/9265e6a3f8c8c4a9a0ea8bc15dbbf982/Task_Management_-_Checklist2x.png?w=1140&fm=webp" alt="" />
      </div>
    </div>
  )
}

export default About