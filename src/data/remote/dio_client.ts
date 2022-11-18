import { Dio } from 'mxflutter-dio';

class DioClient{
    private dio: any;
    private baseUrl: String;
    private params: any;

    constructor({baseUrl, params}){
        this.dio = Dio();
        this.baseUrl = baseUrl;
        this.params = params;
    }

    async get(){
        return this.dio.get(this.baseUrl + this.params); //temp
    }

    async post({body}){
        return this.dio.post(this.baseUrl + this.params); //temp
    }

}

export {DioClient}