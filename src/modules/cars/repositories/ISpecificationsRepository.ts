import { Specification } from "../model/Specification";

interface ICreateSpecificationDTO{
    name: string;
    description: string;
}

interface ISpecificationsRepositor{
   create({description, name} : ICreateSpecificationDTO): void; 
   findByName(name: string):Specification;
}

export { ISpecificationsRepositor, ICreateSpecificationDTO };