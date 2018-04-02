export class Task{
    constructor(
        public Id: number,
        public TaskDesc: string,
        public Deadline: string,
        public Priority: number,
        public WorkerId: number
    ){}
}