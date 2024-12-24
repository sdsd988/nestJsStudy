import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';

@Controller('board')
export class BoardController {

    @Get()
    findAll() {
        return 'findAll';
    }

    @Get(':id')
    find(
        @Param('id') id: number
    ) {
        return `find id:${id}`;
    }

    @Post()
    create(
        @Body() data:any
    ) {
        return 'create new board';
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() data:any,
    ) {
        return 'update board';
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return 'delete';
    }

}
