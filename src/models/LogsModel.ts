export class LogsModel {
    constructor(
        public message: string = '',
        public attention: boolean = true,
        public tech: string = '',
        public date: string = '',
        public id: number = 0,
    ) {
    }
}