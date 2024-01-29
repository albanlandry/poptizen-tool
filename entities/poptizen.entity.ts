import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectId } from 'mongodb';

@Entity("poptizens")
export class Poptizen {
    // @Exclude({ toPlainOnly: true })
    // @ObjectIdColumn()
    _id: ObjectId;

    // @Column()
    name: string;

    // @Column()
    level: number;

    // @Column()
    rating: number;

    // @Column()
    attribute: string;

    // @Column()
    desc: string;

    // @Column()
    filename: string;
}