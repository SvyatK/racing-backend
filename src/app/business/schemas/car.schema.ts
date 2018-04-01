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
    // TODO outdated, remove
    steering: { type: Number },
    dragConstant: { type: Number },
    wheelFrictionConstant: { type: Number },
    engineForce: { type: Number },
    brakingForce: { type: Number },
    mass: { type: Number }
});

CarSchema.pre('save', function (next) {
    if ( this.isNew ) {
        this.createdAt = new Date();
    }
    this.updatedAt = new Date();
    next();
});