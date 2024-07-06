const alunos = [
    { nome: 'João', nota: 6 },
    { nome: 'Maria', nota: 10 },
    { nome: 'Pedro', nota: 5 },
    { nome: 'Matheus', nota: 9 }
];

const notasDosAlunos = alunos.filter(function(alunos) {
    return alunos.nota >= 6;
})

console.log(notasDosAlunos);