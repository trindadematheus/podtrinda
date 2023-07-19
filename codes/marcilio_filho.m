let
    nome = "Matheus Trindade",
    convidado = "Marcilio Filho",
    data = DateTime.ToText(DateTime.LocalNow(), "yyyy-MM-dd"),
    mensagem = "Adorei participar do programa com vocês, foi show",

    tabela = Table.FromRecords({[Host = nome, Convidado = convidado, Data = data, Mensagem = mensagem]}),
    json = Json.FromValue(tabela),
    jsonString = Text.FromBinary(json)
in
    jsonString