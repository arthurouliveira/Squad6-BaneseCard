var cpf=document.getElementById('cpf');

cpf.addEventListener('input', function(e) {
    var value = e.target.value;
    var cpfPattern = value.replace(/\D/g, '') // Remove qualquer coisa que não seja número
                            .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o terceiro dígito
                            .replace(/(\d{3})(\d)/, '$1.$2') // Adiciona ponto após o sexto dígito
                            .replace(/(\d{3})(\d)/, '$1-$2') // Adiciona traço após o nono dígito
                            .replace(/(-\d{2})\d+?$/, '$1'); // Impede entrada de mais de 11 dígitos
    e.target.value = cpfPattern;
});

function cont()
{
    var c=cpf.value;

    if(c == "000.000.000-00")
    {
        sessionStorage.setItem("type","cliente");
    }
    else if(c == "000.000.000-01")
    {
        sessionStorage.setItem("type","adm");
    }

    window.location.href = "../Telas de residência/pesquisa-campanha.html";
}