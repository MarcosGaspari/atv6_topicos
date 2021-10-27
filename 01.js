const funcionarios = [
    {
    id: 11,
    nome: 'joao da silva',
    cpf: '111.222.333-44',
    categoria: 'tecnico'
    },
    {
    id: 22,
    nome: 'joana da silva',
    cpf: '111.222.333-55',
    categoria: 'tecnico'
    },
    {
    id: 23,
    nome: 'joana da Mata',
    cpf: '111.222.333-66',
    categoria: 'analista'
    },
    {
    id: 24,
    nome: 'joana da Mata',
    cpf: '23456789-00',
    categoria: 'gerente'
    },
    {
    id: 45,
    nome: 'joana da Mata',
    cpf: '111222333-44',
    categoria: 'gerente'
    },
    {
    id: 36,
    nome: 'joana da Mata',
    cpf: '654321987-23',
    categoria: 'gerente'
    },
    {
    id: 27,
    nome: 'joana da Mata',
    cpf: '098876654-99',
    categoria: 'gerente'
    }
    ];
    //- 1º commit: Use o filter() para recuperar um array apenas com objetos da categoria 'gerente'
    
    const categ = funcionarios.filter(busca_categoria => (busca_categoria.categoria == 'gerente'))
    console.log(categ);

    //- 2º commit: Use o reduce() para retornar o objeto com o menor id
    console.log('------------------------------------');

    const menor_id = funcionarios.reduce((anterior, atual) => {
        if (atual.id < anterior.id)
            return atual;
        else 
            return anterior;
    });
    console.log(menor_id);

    //- 3º commit: Use o map() para colocar todos os nomes no formato UpperCase.
    console.log('------------------------------------');
    
    const upper = funcionarios.map(uppercas => (uppercas.nome.toUpperCase()));
    console.log(upper)
