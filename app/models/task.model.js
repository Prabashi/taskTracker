module.exports = mongoose => {
    const Task = mongoose.model(
      "task",
      mongoose.Schema(
        {
            id: String,
            taskName: String,
            desc: String,
            board: String,
            estimate: String,
            remaining: String,
            priority: String,
            status: String
        },
        { timestamps: true }
      )
    );
  
    return Task;
  };
  
