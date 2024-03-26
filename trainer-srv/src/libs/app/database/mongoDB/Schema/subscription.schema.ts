import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    trainerId: String,
    userId: String,
    amount: Number,
    duration: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    expiresAt: {
        type: Date,
        index: { expires: 0 } // This line sets up automatic deletion based on expireAt
    }
});

const subscription = mongoose.model("subscription", subscriptionSchema);

export { subscription };
