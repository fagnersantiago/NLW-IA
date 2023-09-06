import { Entity } from "../core/entities/entities";

interface CompanyProps {
  name: string;
  cnpj: number;
}

export class Company extends Entity<CompanyProps> {
  static create(props: CompanyProps, id?: string) {
    const company = new Company(props, id);
    return company;
  }
}
