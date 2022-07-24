import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService {
    logStatusChange(status: String) {
        console.log('A server status changed, new status: ' + status);
    }    
}