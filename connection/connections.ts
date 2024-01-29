import "reflect-metadata";
import { DataSource } from "typeorm";
import { Poptizen } from "../entities/poptizen.entity";
import * as mongoose from "mongoose";

const MyDataSource = new DataSource({
    type: 'mongodb',
    host: '54.180.109.198',
    port: 27017,
    database: "poptizen_dev",
    // database: 'poptizen',
    entities: [Poptizen],
    // timezone: '+00:00',
    // dateStrings: ['DATE'],
    // autoLoadEntities: true,
    replicaSet: 'rs0'
});

(async () => {
    await MyDataSource.initialize();
})();

export const AppDataSource = MyDataSource;

/*
export const Mongoose = async () => {
    return await mongoose.connect('mongodb://127.0.0.1:27017/test');
}
*/