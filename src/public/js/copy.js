function copiarAlPortapapeles() {
    let texto = document.getElementById('texto');
    texto.select();
    texto.setSelectionRange(0, 99999);
    document.execCommand('copy');
}