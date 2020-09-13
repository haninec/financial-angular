import { FormGroup, FormControl } from '@angular/forms';

export abstract class BaseModel {

    public id: number;
    public uuid: string;
    public create_date: Date = new Date();
    public status = true;

    constructor(data?: any) {
      
        if (data) {
            console.log(data)
            this.id = data.id;
            this.uuid = data.uuid;
            this.create_date = data.create_date;
            this.status = data.status;
        }
    }

    public toFormGroup(): FormGroup {
        return new FormGroup ({
            id: new FormControl(0),
            uuid: new FormControl(0),
            create_date: new FormControl(new Date()),
            status: new FormControl(true)
        });
    }
}
