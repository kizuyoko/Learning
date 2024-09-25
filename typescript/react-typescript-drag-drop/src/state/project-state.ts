namespace App {
  // Project State Manegement
  type Listener<T> = (items: T[]) => void;

  class State<T> {
    protected listeners: Listener<T>[] = [];

    addLister(listenerFn: Listener<T>) {
      this.listeners.push(listenerFn);
    }
  }

  export class ProjectState extends State<Project>{
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
      super();
    }

    static getInstance() {
      if (this.instance) {
        return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
    }

    addProject(
      title: string,
      description: string,
      numOfPeople: number,
    ) {
      const newProject = new Project(
        Math.random().toString(),
        title,
        description,
        numOfPeople,
        ProjectStatus.Active,
      );
      this.projects.push(newProject);
      this.updateListeners();
    }

    // Change the status
    moveProject(projectId: string, newStatus: ProjectStatus) {
      const project = this.projects.find(project => project.id === projectId);

      if (project && project.status !== newStatus ) {
        project.status = newStatus;
        this.updateListeners();
      }
    }

    private updateListeners() {
      for (const listerFn of this.listeners) {
        listerFn(this.projects.slice());
      }
    }
  }

  export const projectState = ProjectState.getInstance();

}