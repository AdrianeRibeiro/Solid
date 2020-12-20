// O - Open Closed Principle: deve-se poder adicionar comportamento numa classe/componente sem ter que alterá-lo

// Usado com Decorator, Composite, Proxy

// Exemplo de um formulário que possui validação de obrigatoriedade e telefone
// Problema: controlador depende de classes concretas
// Dependency Inversion
// Se fosse adicionar uma nova validação seria necessário alterar minha classe

class AddGroupController {
  constructor(
    private requiredFieldValidation: RequiredFieldValidation,
    private phoneValidation: PhoneValidation
  ) { }
  
  add() {
    this.requiredFieldValidation.validate()
    this.phoneValidation.validate()
  }
}

class RequiredFieldValidation {
  validate() {}
}

class PhoneValidation {
  validate() {}
}
