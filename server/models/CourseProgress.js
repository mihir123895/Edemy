import mongoose from 'mongoose';

const courseProgressSchema = new mongoose.Svhema({
    userId:{String,required:true},
    courseId:{type:String,required:true},
    complated:{type:Boolean,required:false},
    lectureComplated:[]
},{minimize:false})

export const CourseProgress = mongoose.model('CourseProgress',courseProgressSchema)