import React from "react";
import { User, Calendar, Flag, MessageSquare } from "lucide-react";

const tasks = [
    { id: 1, name: "Task 2", assignee: "", due: "", priority: "", status: "TO DO" },
    { id: 2, name: "Task 3", assignee: "", due: "", priority: "", status: "TO DO" }
];

const TaskList = () => {
    return (
        <div className="w-full p-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <h2 className="text-xl font-semibold">TO DO</h2>
                <span className="text-sm text-gray-500">{tasks.length}</span>
            </div>

            {/* Task Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="grid grid-cols-5 bg-gray-100 p-3 text-sm font-semibold text-gray-600">
                    <div>Name</div>
                    <div className="text-center">Assignee</div>
                    <div className="text-center">Due Date</div>
                    <div className="text-center">Priority</div>
                    <div className="text-center">Status</div>
                </div>

                {tasks.map((task) => (
                    <div
                        key={task.id}
                        className="grid grid-cols-5 items-center p-3 border-t text-sm hover:bg-gray-50 transition"
                    >
                        {/* Name */}
                        <div className="font-medium">{task.name}</div>

                        {/* Assignee */}
                        <div className="flex justify-center">
                            <User className="w-4 h-4 text-gray-500" />
                        </div>

                        {/* Due */}
                        <div className="flex justify-center">
                            <Calendar className="w-4 h-4 text-gray-500" />
                        </div>

                        {/* Priority */}
                        <div className="flex justify-center">
                            <Flag className="w-4 h-4 text-gray-500" />
                        </div>

                        {/* Status */}
                        <div className="flex justify-center">
                            <span className="px-2 py-1 border rounded-full text-xs bg-gray-100">
                                {task.status}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Task Link */}
            <button className="mt-3 text-blue-600 text-sm font-medium hover:underline">
                + Add Task
            </button>
        </div>
    );
};

export default TaskList;