export class Company{
    constructor(
        public Id: number,
        public Name: string,
        public Address: string,
        public PhoneNumber: string
    ){}
}

export class CompanyList{
    constructor(
        public Id: number,
        public Name: string,
        public Address: string,
        public PhoneNumber: string,
        public WorkersQuantity: number
    ){}
}