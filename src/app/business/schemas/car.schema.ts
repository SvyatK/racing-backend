import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema({
    createdAt: Date,
    updatedAt: Date,
    name: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    image: { type: String },
    max_acceleration: { type: Number },
    max_deceleration: { type: Number },
    steering: { type: Number }
});

CarSchema.pre('save', function (next) {
    if ( this.isNew ) {
        this.createdAt = new Date();
    }
    this.updatedAt = new Date();
    next();
});