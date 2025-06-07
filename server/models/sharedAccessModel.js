const mongoose = require("mongoose");

const sharedAccessSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  permission: {
    type: String,
    enum: ["view", "edit"],
    default: "view",
  },
  sharedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const SharedAccessModel = mongoose.models.SharedAccess || mongoose.model("SharedAccess", sharedAccessSchema);

module.exports = SharedAccessModel;
