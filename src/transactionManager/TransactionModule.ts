import { Module, Global } from "@nestjs/common";
import {Transaction} from "./transaction.service";
import {TransactionalRepository} from "./TransactionalRepository";

@Global()
@Module({
    providers: [Transaction, TransactionalRepository],
    exports: [Transaction, TransactionalRepository],
})

export class TransactionModule {
    
}