'use strict';

var Aluno = require('../data/data').alunos;

module.exports = function (router) {

    router.route('/alunos')
        .get(function(req, res, next) {
            Aluno.find(function (err, alunos) {
                if (err) { return next(err); }
                res.json(alunos);
            });
        })
        .post(function (req, res, next) {
            var novoAluno = req.body;

            Aluno.create(novoAluno, function (err, alunoCriado) {
                if (err) { return next(err); }
                res.json(alunoCriado);
            });
        });


    router.route('/alunos/:matricula')
        .get(function (req, res, next) {
            Aluno.findOne({ matricula: req.params.matricula }, function (err, alunoEncontrado) {
                if (err) { return next(err); }

                res.json(alunoEncontrado);
            });
        })
        .put(function (req, res, next) {
            var alunoComAlteracoes = req.body;
            Aluno.update(alunoComAlteracoes, function (err, alunoAlterado) {
                if (err) { return next(err); }
                res.json(alunoAlterado);
            });
        })
        .delete(function (req, res, next) {
            Aluno.remove({ matricula: req.params.matricula }, function (err, alunoRemovido) {
                if (err) { return next(err); }
                res.json(alunoRemovido);
            });
        });
};
