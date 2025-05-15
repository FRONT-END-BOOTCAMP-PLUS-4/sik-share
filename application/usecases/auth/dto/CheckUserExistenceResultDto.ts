export class CheckUserExistenceResultDto{
    constructor(public exists: boolean, public publicId:number|null) {}

}