import React, { Component } from "react";
import TaskForm from "./taskForm";
import TaskList from "./taskList";

const tasks = [];

export default function layout() {
  return (
    <section>
      <h1>New JavaScript Project!</h1>
      <TaskForm />
      !!!
      <TaskList tasks={tasks} />
    </section>
  );
}
