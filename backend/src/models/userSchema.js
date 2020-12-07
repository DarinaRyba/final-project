const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  displayName: String,
  email: String,
  photo: String,
  phoneNumber: Number,
  age: Number,
  workouts: { type: Schema.Types.ObjectId, ref: 'workout' }
});

module.exports = model('user', userSchema);
