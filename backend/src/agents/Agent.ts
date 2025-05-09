export interface AgentTask {
    taskId: string;
    status: 'pending' | 'completed' | 'failed';
    execute: () => Promise<any>;
}

export class AIAgent {
    private tasks: AgentTask[] = [];
    constructor(public name: string, public description: string) {}
    addTask(task: AgentTask): void { this.tasks.push(task); }
    async executeTasks(): Promise<void> {
        for (const task of this.tasks) {
            try {
                await task.execute();
                task.status = 'completed';
            } catch {
                task.status = 'failed';
            }
        }
    }
}
