let tasks = []
export const resolvers = {
  Query: {
    tasks: () => tasks,
  },
  Mutation: {
    createTask: (_, { title, description }) => {
      if (!title || !description) {
        throw new Error("Title and description are required")
      }
      const task = {
        id: tasks.length,
        title,
        description,
        completed: false,
      }
      tasks.push(task)
      return task
    },
    updateTask: (_, { id, description, completed }) => {
      if (!id) {
        throw new Error("Id is required")
      }
      if (!completed) {
        throw new Error("Completed is required")
      }
      const task = tasks.find((task) => task.id === Number(id))
      if (!task) {
        throw new Error("Task not found")
      }
      if (description) {
        task.description = description
      }
      task.completed = completed
      return task
    },
    deleteTask: (_, { id }) => {
      if (!id) {
        throw new Error("Id is required")
      }
      const task = tasks.find((task) => task.id === Number(id))
      if (!task) {
        throw new Error("Task not found")
      }
      tasks = tasks.filter((task) => task.id !== Number(id))
      return task
    },
  },
}
