import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private httpClient: HttpClient) {
  }

  testDemo() {
    const httpOptions: Object = {
      responseType: 'text'
    };
    return this.httpClient.get<string>('/api/v1/demo', httpOptions);
  }
}
