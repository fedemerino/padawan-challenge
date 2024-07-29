import { resolvers } from "../graphql/resolvers"

const { createTask, updateTask, deleteTask } = resolvers.Mutation

describe("resolvers", () => {
  let tasks
  beforeEach(() => {
    tasks = []
  })

  it("Should create a task", () => {
    const result = createTask(null, {
      title: "task_1",
      description: "description_1",
    })
    expect(result).toEqual({
      id: 0,
      title: "task_1",
      description: "description_1",
      completed: false,
    })
    expect(resolvers.Query.tasks()).toEqual([
      {
        id: 0,
        title: "task_1",
        description: "description_1",
        completed: false,
      },
    ])
  })

  it("Should return all tasks", () => {
    const taskMock = {
      id: 0,
      title: "task_1",
      description: "description_1",
      completed: false,
    }
    tasks.push(taskMock)
    const result = resolvers.Query.tasks()
    expect(result).toEqual([
      {
        id: 0,
        title: "task_1",
        description: "description_1",
        completed: false,
      },
    ])
  })

  it("Should update a task", () => {
    let taskMock = {
      id: 0,
      title: "task_1",
      description: "description_1",
      completed: false,
    }
    tasks.push(taskMock)
    const result = updateTask(null, {
      id: 0,
      description: "updated",
      completed: true,
    })
    expect(result).toEqual({
      id: 0,
      title: "task_1",
      description: "updated",
      completed: true,
    })
    expect(resolvers.Query.tasks()).toEqual([
      { id: 0, title: "task_1", description: "updated", completed: true },
    ])
  })

  it("Should delete a task", () => {
    const taskMock = {
      id: 0,
      title: "task_1",
      description: "updated",
      completed: true,
    }
    tasks.push(taskMock)
    const result = deleteTask(null, { id: 0 })
    expect(result).toEqual({
      id: 0,
      title: "task_1",
      description: "updated",
      completed: true,
    })
    expect(resolvers.Query.tasks()).toEqual([])
  })

})
