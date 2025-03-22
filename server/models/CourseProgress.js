import mongoose from 'mongoose';

const courseProgressSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    courseId: { type: String, required: true },
    completed: { type: Boolean, required: false }, // fixed typo from 'complated'
    lectureCompleted: { type: [String], required: false } // store lecture IDs as strings
}, { minimize: false });
export const CourseProgress = mongoose.model('CourseProgress', courseProgressSchema);
