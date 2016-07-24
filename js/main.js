var jogador = 'O';
$(document).ready(function() {
    $('#jogador').html('Jogador da vez: ' + jogador);

    $('table tr td').click(function() {
        if (!$(this).html()) {
            $(this).html(jogador);
            alternarJogador();
            verificarJogada();
        }
    });

    function verificarJogada() {
        validarLinhas();
        validarColunas();
        validarDiagonais();
    }

    function validarDiagonais() {
        var colunas = [];
        colunas.push([$('table tr:nth-child(1) td:nth-child(1)'), $('table tr:nth-child(2) td:nth-child(2)'), $('table tr:nth-child(3) td:nth-child(3)')]);
        colunas.push([$('table tr:nth-child(1) td:nth-child(3)'), $('table tr:nth-child(2) td:nth-child(2)'), $('table tr:nth-child(3) td:nth-child(1)')]);
        $.each(colunas, function(index, coluna) {
            if ($(coluna).text() == "OOO" || $(coluna).text() == "XXX") {
                ganhou(coluna);
            }
        });
    }

    function validarLinhas() {
        $('table tr').each(function() {
            if ($(this).children().text() == "OOO" || $(this).children().text() == "XXX") {
                var array = $(this).children();
                ganhou(array);
            }
        });
    }

    function validarColunas() {
        var colunas = [];
        for (var coluna = 1; coluna <= 3; coluna++) {
            var dados = [
                $('table tr:nth-child(1) td:nth-child(' + coluna + ')'),
                $('table tr:nth-child(2) td:nth-child(' + coluna + ')'),
                $('table tr:nth-child(3) td:nth-child(' + coluna + ')')
            ];
            colunas.push(dados);
        }
        $.each(colunas, function(index, coluna) {
            if ($(coluna).text() == "OOO" || $(coluna).text() == "XXX") {
                ganhou(coluna);
            }
        });
    }

    function ganhou(array) {
        $.each(array, function() {
            $(this).css('background-color', '#ff3b30');
        });
        $('#jogador').html('<b>JOGADOR VENCEDOR: ' + $(array[0]).text() + '</b>');
        $('.wrapper').html('<br><input type="button" id="reiniciar" onclick="location.reload()" value="Jogar novamente"></input>');
        $('table tr td').unbind('click');
    }

    function alternarJogador() {
        if (jogador == 'O') {
            jogador = 'X';
        } else {
            jogador = 'O';
        }
        $('#jogador').html('Jogador da vez: ' + jogador);
    }

});
