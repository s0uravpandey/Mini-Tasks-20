var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    taskName: {
        type: String,
        required: 'Enter the name of the task'
    },
    status: {
        type: [{
          type: String,
          enum: ['pending','completed']
        }],
        default: ['pending']
      }
});

module.exports = mongoose.model('Tasks', TaskSchema);