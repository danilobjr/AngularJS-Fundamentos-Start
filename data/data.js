'use strict';

var _ = require('lodash'),
    moment = require('moment');

module.exports = (function () {

    var gradePadrao = {
        // periodo: '2014.2',
        cadeiras:[
            { descricao: 'Arquitetura de Computadores', creditos: 4, valor: 112.9, status: 'pendente' },
            { descricao: 'Lógica de Programação', creditos: 4, valor: 112.9, status: 'pendente' },
            { descricao: 'Matemática Discreta', creditos: 4, valor: 112.9, status: 'pendente' },
            { descricao: 'Inglês I', creditos: 2, valor: 58.5, status: 'pendente' },
            { descricao: 'Inglês II', creditos: 2, valor: 58.5, status: 'pendente' },
            { descricao: 'Engenharia de Software', creditos: 4, valor: 112.9, status: 'pendente' },
            { descricao: 'Estrutura de Dados', creditos: 4, valor: 112.9, status: 'pendente' },
            { descricao: 'Interação Humano Computador', creditos: 2, valor: 58.5, status: 'pendente' },
            { descricao: 'Programação OO', creditos: 4, valor: 112.9, status: 'pendente' },
            { descricao: 'Banco de Dados', creditos: 4, valor: 58.5, status: 'pendente' },
            { descricao: 'Segurança da Informação', creditos: 2, valor: 58.5, status: 'pendente' },
            { descricao: 'Empreendedorismo', creditos: 2, valor: 58.5, status: 'pendente' },
            { descricao: 'Gestão de Equipes', creditos: 2, valor: 58.5, status: 'pendente' },
            { descricao: 'Economia e Finanças', creditos: 2, valor: 58.5, status: 'pendente' },
            { descricao: 'Contabilidade', creditos: 2, valor: 58.5, status: 'pendente' },
            { descricao: 'Laboratório de Hardware', creditos: 2, valor: 58.5, status: 'pendente' }
        ]
    };

    var gerarMatricula = function () {
        var periodo = moment().format('YYYYMM');
        var id = _.uniqueId();

        while (id.length < 6) {
            id = '0' + id;
        }

        return periodo + id;
    };

    var gerarGradePadrao = function () {
        var grade = _.cloneDeep(gradePadrao);

        var dataHoje = moment();
        var anoAtual = dataHoje.format('YYYY');
        var semestre = (dataHoje.format('Q') < 3) ? '1' : '2';
        grade.periodo = anoAtual + '.' + semestre;

        return grade;
    };

    var alunos = [
        {
            id: _.uniqueId(),
            matricula: gerarMatricula(),
            nome: 'Aquiteclínio Silvonato Júnior',
            dataNascimento: '18/08/1994',
            email: 'jr@email.com',
            fone: '(99) 8877-6655',
            estahMatriculado: false,
            grade: {
                periodo: '2014.2',
                cadeiras:[
                    { descricao: 'Arquitetura de Computadores', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Lógica de Programação', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Matemática Discreta', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Inglês I', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Inglês II', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Engenharia de Software', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Estrutura de Dados', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Interação Humano Computador', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Programação OO', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Banco de Dados', creditos: 4, valor: 58.5, status: 'pendente' },
                    { descricao: 'Segurança da Informação', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Empreendedorismo', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Gestão de Equipes', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Economia e Finanças', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Contabilidade', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Laboratório de Hardware', creditos: 2, valor: 58.5, status: 'pendente' }
                ]
            }
        },
        {
            id: _.uniqueId(),
            matricula: gerarMatricula(),
            nome: 'Clidervânia Sucupira Miriápoles',
            dataNascimento: '18/08/1994',
            email: 'sumi@email.com',
            fone: '(99) 8877-6655',
            estahMatriculado: true,
            grade: {
                periodo: '2014.2',
                cadeiras:[
                    { descricao: 'Arquitetura de Computadores', creditos: 4, valor: 112.9, status: 'concluida' },
                    { descricao: 'Lógica de Programação', creditos: 4, valor: 112.9, status: 'concluida' },
                    { descricao: 'Matemática Discreta', creditos: 4, valor: 112.9, status: 'concluida' },
                    { descricao: 'Inglês I', creditos: 2, valor: 58.5, status: 'concluida' },
                    { descricao: 'Inglês II', creditos: 2, valor: 58.5, status: 'cursando' },
                    { descricao: 'Engenharia de Software', creditos: 4, valor: 112.9, status: 'cursando' },
                    { descricao: 'Estrutura de Dados', creditos: 4, valor: 112.9, status: 'cursando' },
                    { descricao: 'Interação Humano Computador', creditos: 2, valor: 58.5, status: 'cursando' },
                    { descricao: 'Programação OO', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Banco de Dados', creditos: 4, valor: 58.5, status: 'cursando' },
                    { descricao: 'Segurança da Informação', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Empreendedorismo', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Gestão de Equipes', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Economia e Finanças', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Contabilidade', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Laboratório de Hardware', creditos: 2, valor: 58.5, status: 'pendente' }
                ]
            }
        },
        {
            id: _.uniqueId(),
            matricula: gerarMatricula(),
            nome: 'Biritrudes Abelarda Sombreira',
            dataNascimento: '18/08/1994',
            email: 'biritas@email.com',
            fone: '(99) 8877-6655',
            estahMatriculado: true,
            grade: {
                periodo: '2014.2',
                cadeiras:[
                    { descricao: 'Arquitetura de Computadores', creditos: 4, valor: 112.9, status: 'concluida' },
                    { descricao: 'Lógica de Programação', creditos: 4, valor: 112.9, status: 'concluida' },
                    { descricao: 'Matemática Discreta', creditos: 4, valor: 112.9, status: 'concluida' },
                    { descricao: 'Inglês I', creditos: 2, valor: 58.5, status: 'concluida' },
                    { descricao: 'Inglês II', creditos: 2, valor: 58.5, status: 'cursando' },
                    { descricao: 'Engenharia de Software', creditos: 4, valor: 112.9, status: 'cursando' },
                    { descricao: 'Estrutura de Dados', creditos: 4, valor: 112.9, status: 'cursando' },
                    { descricao: 'Interação Humano Computador', creditos: 2, valor: 58.5, status: 'cursando' },
                    { descricao: 'Programação OO', creditos: 4, valor: 112.9, status: 'pendente' },
                    { descricao: 'Banco de Dados', creditos: 4, valor: 58.5, status: 'cursando' },
                    { descricao: 'Segurança da Informação', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Empreendedorismo', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Gestão de Equipes', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Economia e Finanças', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Contabilidade', creditos: 2, valor: 58.5, status: 'pendente' },
                    { descricao: 'Laboratório de Hardware', creditos: 2, valor: 58.5, status: 'pendente' }
                ]
            }
        }
    ];

    var find = function (callback) {
        setTimeout(function () {
            var error;
            callback(error, alunos);
        }, 0);
    };

    var findOne = function (query, callback) {
        setTimeout(function () {
            var aluno = _.find(alunos, query);
            var error;

            if (!aluno) {
                error = new Error('Aluno com matricula "' + query.matricula + '"" não encontrado');
            }

            callback(error, aluno);
        }, 0);
    };

    var validateAluno = function (aluno) {
        if (!aluno) {
            return new Error('Objeto aluno é undefined');
        } else if (!aluno.nome) {
            return new Error('Nome de aluno não pode ser nulo');
        } else if (aluno.nome.length < 2) {
            return new Error('Nome de aluno precisa ter pelo menos 2 caracteres');
        } else if (!aluno.dataNascimento) {
            return new Error('Data de nascimento de aluno não pode ser nulo');
        } else if (!/(^(((0[1-9]|[12][0-8])[\/](0[1-9]|1[012]))|((29|30|31)[\/](0[13578]|1[02]))|((29|30)[\/](0[4,6,9]|11)))[\/](19|[2-9][0-9])\d\d$)|(^29[\/]02[\/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/.test(aluno.dataNascimento)) {
            return new Error('Data de nascimento de aluno tem formato inválido');
        } else if (!aluno.fone) {
            return new Error('Telefone de aluno não pode ser nulo');
        } else if (!/(\(\d{2}\))\s(\d{4,5})\-(\d{4})\b/.test(aluno.fone)) {
            return new Error('Telefone de aluno tem formato inválido');
        }

        return undefined;
    };

    var create = function (novoAluno, callback) {
        setTimeout(function () {
            var erro = validateAluno(novoAluno);
            if (erro) {
                return callback(erro);
            }

            novoAluno.id = _.uniqueId();
            novoAluno.matricula = gerarMatricula();
            novoAluno.estahMatriculado = false;
            novoAluno.grade = gerarGradePadrao();

            alunos.push(novoAluno);

            callback(undefined, novoAluno);
        }, 0);
    };

    var update = function (alunoAlterado, callback) {
        setTimeout(function () {
            var erro = validateAluno(alunoAlterado);
            if (erro) {
                return callback(erro);
            }

            var aluno = _.find(alunos, { matricula: alunoAlterado.matricula });

            aluno.nome = alunoAlterado.nome;
            aluno.dataNascimento = alunoAlterado.dataNascimento;
            aluno.email = alunoAlterado.email;
            aluno.fone = alunoAlterado.fone;
            aluno.estahMatriculado = alunoAlterado.estahMatriculado;
            aluno.grade = alunoAlterado.grade;

            callback(undefined, aluno);
        }, 0);
    };

    var remove = function (query, callback) {
        setTimeout(function () {
            var alunoRemovido = _.remove(alunos, query);
            var error;

            if (!alunoRemovido) {
                error = new Error('Aluno com matricula "' + query.matricula + '"" não encontrado');
            }

            callback(error, alunoRemovido);
        }, 0);
    };

    return {
        alunos: {
            find: find,
            findOne: findOne,
            create: create,
            update: update,
            remove: remove
        }
    };

})();
