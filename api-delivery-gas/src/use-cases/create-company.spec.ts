import { CreateCompanyUseCase } from "./create-company-use-case";

describe("Create Company", () => {
  it("Should be abel create company", () => {
    const company = new CreateCompanyUseCase();

    const companyCreated = company.execute({
      name: "Fake company",
      cnpj: 12345678914,
    });

    expect(companyCreated).toHaveProperty("id");
  });
});
