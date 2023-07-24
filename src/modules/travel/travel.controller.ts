import {
    Body, ClassSerializerInterceptor,
    Controller, Get, Param,
    Post, Put, Query,
    Res, UseInterceptors,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiTags,
} from '@nestjs/swagger';
import {TravelService} from './travel.service';
import {LocationDto} from "./dto/location-dto";
import {PostTravelDto} from "./dto/postTravel-dto";
import {AddTravelerDto} from "./dto/add-traveler-dto";

@ApiTags('taxi24')
@ApiBearerAuth()
@Controller('v1/taxi24')
export class TravelController {
    constructor(
        private readonly travelService: TravelService,
    ) {
    }

    @Get('/drivers/:id')
    async getDriversId(@Param('id') id: number, @Res() response
    ): Promise<any> {
        return await this.travelService.getDriverId(id, response)
    }

    @Get('/drivers')
    async getDrivers(@Res() response
    ): Promise<any> {
        return await this.travelService.getDrivers(response)
    }

    @Post('/drivers/short-distance')
    async getShortDistance(@Body() locationDto: LocationDto, @Res() response
    ): Promise<any> {
        return await this.travelService.getShortDistance(locationDto, response)
    }

    @Post('/travel')
    async postTravel(@Body() postTravelDto: PostTravelDto, @Res() response
    ): Promise<any> {
        return await this.travelService.postTravel(postTravelDto, response)
    }

    @Get('/travel')
    async getTravel(@Res() response
    ): Promise<any> {
        return await this.travelService.getTravel(response)
    }


    @Get('/pessenger/:id')
    async getPessengerId(@Param('id') id: number, @Res() response
    ): Promise<any> {
        return await this.travelService.getPessengerId(id, response)
    }

    @Get('/pessenger')
    async getPessenger(@Res() response
    ): Promise<any> {
        return await this.travelService.getPessenger(response)
    }
}
