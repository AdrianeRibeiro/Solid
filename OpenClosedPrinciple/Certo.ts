class AddGroupController {
  constructor(private validation: Validation) { }
  
  add() {
    this.validation.validate()
  }
}

interface Validation {
  validate: () => void
}

class RequiredFieldValidation implements Validation {
  validate (): void {
  }
}

class PhoneValidation implements Validation {
  validate (): void {
  }
}

class AddGroupValidationComposite implements Validation {
  constructor(
    private requiredFieldValidation: RequiredFieldValidation,
    private phoneValidation: PhoneValidation
  ) { }
  
  validate(): void {
    this.requiredFieldValidation.validate()
    this.phoneValidation.validate()
  }
}

// Dependency injection: injetar as dependencias da classe pelo construtor
const requiredFieldValidation = new RequiredFieldValidation()
const phoneValidation = new PhoneValidation()
const composite = new AddGroupValidationComposite(requiredFieldValidation, phoneValidation)
const controller = new AddGroupController(composite)