import { Company } from "../domain/entities/company";

interface CreateCompanyRequest {
  name: string;
  cnpj: number;
}
export class CreateCompanyUseCase {
  execute({ name, cnpj }: CreateCompanyRequest) {
    const company = Company.create({ name, cnpj });

    return company;
  }
}
