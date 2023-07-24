import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {HttpModule} from '@nestjs/axios';
import {TravelModule} from './modules/travel/travel.module';

import {config} from 'dotenv';
import {TypeOrmModule} from "@nestjs/typeorm";

config();

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forRoot({
            type: process.env.DB_TYPE,
            host: process.env.DB_HOST_WRITE,
            port: parseInt(process.env.DB_PORT),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            autoLoadEntities: true,
            synchronize: process.env.DB_AUTO_SYNCHRONIZE || true,
            logging: process.env.DB_SHOULD_LOG_QUERYS || true,
        }),
        TravelModule
    ],
    controllers: [
        AppController
    ],
    providers: [
        AppService,
    ]
})
export class AppModule {
}
