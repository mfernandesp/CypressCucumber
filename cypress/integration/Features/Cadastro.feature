# language: pt

Funcionalidade: Treinamento

Contexto: 
    Dado que o usuário esteja na tela "Campo de Treinamento"

@alta
Cenário: Acionar a opção "Clique Me!"    
    Quando a opção "Clique Me!" for acionada
    Então o texto da opção é alterado para "Obrigado!"

@alta
Cenário: Acionar a opção "Obrigado!"
    Dado que o usuário tenha acionado a opção "Clique Me!" 
    Quando a opção "Obrigado!" for acionada
    Então o texto da opção permanece como "Obrigado!"

@repostaDemorada @alta
Cenário: Acionar a opção "Resposta Demorada"
    Quando a opção "Resposta Demorada" for acionada
    Então o tipo do campo Resultado é alterado para "campo de texto"


@cadastro @alta
Cenário: Cadastrar com todos os campos preenchidos
    Dado que todos os campos do cadastro tenham sido preenchidos
    Quando a opção "Cadastrar" for acionada
    Então o texto "Cadastrado!" é exibido no campo Resultado
    E todos os dados cadastrados são exibidos com o status no campo "Resultado"

@cadastro @alta
Esquema do Cenário: Validar os campos obrigatórios do cadastro
    Dado que o campo "Nome" <Preencher Nome> preenchido
    E que o campo "Sobrenome" <Preencher Sobrenome> preenchido
    E a opção "Sexo" <Selecionar Sexo> selecionada
    Quando a opção "Cadastrar" for acionada
    Então uma mensagem é apresentada informando que o campo <Nome do Campo> é obrigatório
    E o cadastro não é realizado

    Cenários:
    | Preencher Nome     | Preencher Sobrenome   | Selecionar Sexo    | Nome do Campo   |
    | "não tenha sido"   | "não tenha sido"      | "não tenha sido"   | "Nome"          |
    | "não tenha sido"   | "tenha sido"          | "tenha sido"       | "Nome"          |
    | "tenha sido"       | "não tenha sido"      | "tenha sido"       | "Sobrenome"     |
    | "tenha sido"       | "tenha sido"          | "não tenha sido"   | "Sexo"          |

@esporte @alta
Esquema do Cenário: Tentar Cadastrar com a opção "O que eh esporte?" e outro esporte selecionado
    Dado que os campos do cadastro obrigatórios tenham sido preenchidos
    E que as opções "O que eh esporte?" e <Outro Esporte> tenham sido selecionadas no campo "Pratica esportes?"
    Quando a opção "Cadastrar" for acionada
    Então a mensagem "Voce faz esporte ou nao?" é exibida
    E o cadastro não é realizado

    Cenários:
    | Outro Esporte   |
    | "Natacao"       |
    | "Futebol"       |

@comida @alta
Esquema do Cenário: Tentar Cadastrar a opção "Vegetariano" com opções "Carne" ou "Frango" selecionadas
    Dado que os campos do cadastro obrigatórios tenham sido preenchidos
    E que as opções "Vegetariano" <Outra Comida> tenham sido marcadas no campo "Qual sua comida favorita?"
    Quando a opção "Cadastrar" for acionada
    Então a mensagem "Tem certeza que voce eh vegetariano?" é exibida
    E o cadastro não é realizado

    Cenários:
    | Outra Comida |
    | "Frango"     |
    | "Carne"      |

@tableHeader @alta
Esquema do Cenário: Validar a opção "Clique aqui" da "Tabela de Usuários" com as informações da linha preenchidas
    Dado que o campo "Checkbox" dessa linha <texto> da tabela esteja marcado 
    E que o campo "Radio" dessa linha <texto> da tabela esteja marcado 
    E que o campo "Input" dessa linha <texto> da tabela esteja preenchido
    Quando a opção "Clique aqui" da linha <texto> for acionada
    Então a mensagem <texto> é exibida

    Cenários:
    | texto       |
    | "Francisco" |
    | "Maria"     |
    | "Usuario A" |
    | "Doutorado" |
    | "Usuario B" |

@cadastro @esporte @media
Cenário: Cadastrar com mais de um esporte selecionado
    Dado que os campos do cadastro obrigatórios tenham sido preenchidos
    E que as opções "natacao" "futebol" "Corrida" "Karate" tenham sido selecionadas no campo "Pratica esportes?"
    Quando a opção "Cadastrar" for acionada
    Então o texto "Cadastrado!" é exibido no campo Resultado
    E os dados cadastrados são exibidos com o status no campo "Resultado"
    E as opções "Natacao", "Futebol", "Corrida" e "Karate" cadastradas no campo "Esportes" são exibidas no cadastro

@repostaDemorada @media
Cenário: Acionar a opção "Cadastrar" após ter acionado a opção "Resposta Demorada"
    Dado que o usuário tenha acionado a opção "Resposta Demorada" 
    E que os campos do cadastro obrigatórios tenham sido preenchidos
    Quando a opção "Cadastrar" for acionada
    Então o tipo do campo Resultado é alterado para "texto"
    E o texto "Cadastrado!" é exibido no campo Resultado
    E os dados cadastrados são exibidos com o status no campo "Resultado"

@cadastro @media
Cenário: Cadastrar apenas com os campos obrigatórios preenchidos
    Dado que os campos do cadastro obrigatórios tenham sido preenchidos
    E que os campos do cadastro obrigatórios tenham sido preenchidos
    Quando a opção "Cadastrar" for acionada
    Então o texto "Cadastrado!" é exibido no campo Resultado
    E os dados cadastrados são exibidos com o status no campo "Resultado"