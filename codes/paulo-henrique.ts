import { makeValidator } from "./factory/validator.factory";
import { CreateUser } from "./usecases/create-user.case";
import { SignUseCase } from "./usecases/sign.usecase";

(async () => {
  const user = await new CreateUser(makeValidator()).execute({
    firstName: "Paulo",
    lastName: "Henrique",
  });

  new SignUseCase(user).execute();
})();
