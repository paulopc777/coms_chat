sequenceDiagram
    autonumber
    actor Cliente
    Cliente->>Site: Acessa o Site
    loop 
        Site->>Cliente: Catalogo de carros
        Note over Cliente,Site: navegação
        Site->>Cliente: Carros referentes <br/>ao gosto do clinete
     end
        Cliente->>Site: Compra  
         loop
            Site->>Backend: Nova Compra
            Note over Backend,Site: Dados
            alt Casso nao disponivel
            Site-->Backend: Modelo semelhante <br/> caso nao esteja mais disponivel   
            Site->>Cliente:Confirmacao ou return [2]
            Cliente-->Site:Confirmacao
            end
            Backend->>DB: Update carro status
        end
        alt  Processamento 
        Backend->>Backend:Gerar Pagamento
        Backend->>Backend:Emitir alerta para loja
         Backend->>Backend:Cofirmacao da loja
        end
        Backend->>Site: Acao concluída
        Note over Site,Cliente: Dados para pagamento etc..
        Site->>Cliente:Compra efetuada