import { BoardService } from "./board.service";
import { CreateBoardDto } from "./dto/create-board.dto";
import { UpdateBoardDto } from "./dto/update-board.dto";
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
    create(data: CreateBoardDto): {
        title: string;
        content: string;
        id: number;
    };
    update(id: number, data: UpdateBoardDto): any;
    remove(id: number): {
        id: number;
        title: string;
        content: string;
    };
}
