import mongoose from 'mongoose';

const memorySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    privacy: {
        type: String,
        default: 'public',
    },
    scheduledTime: {
        type: Date,
        default: null,
    },
    contacts: {
        type: [String],
        default: [],
    },
    videoUrl: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String
    },
    verified: {
        type: Boolean,
        default: false
    },
    deathCertificateUrl: {
        type: String,
        default: null
    }
}, { timestamps: true });

const Memory = mongoose.model('Memory', memorySchema);

export default Memory;
