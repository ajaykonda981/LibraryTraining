
export class CommonListHelper {
    public dataSource: any;
    constructor(
        public apiService:any = null

    ){}


    fetchResults() {
        this.apiService.search().subscribe(a=>{
            this.dataSource=a;
          })
    }



}