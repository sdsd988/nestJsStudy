import {Injectable} from '@nestjs/common';
import {CreateBoardDto} from "./dto/create-board.dto";

@Injectable()
export class BoardService {

    private boards = [
        {
            id: 1,
            title: "hello world 1",
            content: "Content 1",
        }, {
            id: 2,
            title: "hello world2",
            content: "Content 2",
        }, {
            id: 3,
            title: "hello world3",
            content: "Content 3",
        }, {
            id: 4,
            title: "hello world4",
            content: "Content 4",
        }, {
            id: 5,
            title: "hello world5",
            content: "Content 5",
        },
    ]

    findAll() {
        this.getNextId();
        return this.boards;
    }

    find(id: number) {
        const index = this.getBoardId(id);
        return this.boards[index];
    }

    create(data: CreateBoardDto) {
        const newBoard = {id: this.getNextId(), ...data};
        this.boards.push(newBoard);
        return newBoard;
    }

    update(id: number, data: any) {
        const index = this.getBoardId(id);
        if (index > -1) {
            this.boards[index] = {
                ...this.boards[index],
                ...data,
            }
        }

        return null;
    }

    delete(id: number) {
        const index = this.getBoardId(id);
        if (index > -1) {
            const deleteBoard = this.boards[index];
            this.boards.splice(index, 1);
            return deleteBoard;
        }
        return null;
    }

    private getBoardId(id: number): number {
        return this.boards.findIndex((board) => board.id === id);
    }

    private getNextId() {
        return this.boards.sort((a, b) => (b.id - a.id))[0].id + 1;
    }

}