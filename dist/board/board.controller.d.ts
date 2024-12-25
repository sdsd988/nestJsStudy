import { BoardService } from "./board.service";
export declare class BoardController {
    private readonly boardService;
    constructor(boardService: BoardService);
    findAll(): {
        id: number;
        title: string;
        content: string;
    }[];
    find(id: number): {
        id: number;
        title: string;
        content: string;
    };
    create(data: any): any;
    update(id: number, data: any): any;
    remove(id: number): {
        id: number;
        title: string;
        content: string;
    };
}
