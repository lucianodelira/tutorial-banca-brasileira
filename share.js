<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Convite Afiliado</title>
  <script>
    const urlParams = new URLSearchParams(window.location.search);
    const file = urlParams.get("file") || "link.png";
    const link = urlParams.get("link") || "https://app.bancabrasileira.com.br";
    const imageUrl = "https://tutorial.bancabrasileira.net/afiliado/imagens/" + file;

    document.write(`
      <meta property="og:title" content="👤 Banca App — Afiliado">
      <meta property="og:description" content="Link exclusivo gerado, compartilhe já!">
      <meta property="og:image" content="${imageUrl}">
      <meta property="og:url" content="${link}">
      <meta property="og:type" content="website">

      <meta name="twitter:card" content="summary_large_image">
      <meta name="twitter:image" content="${imageUrl}">
    `);

    setTimeout(() => { window.location.href = link; }, 2000);
  </script>
</head>
<body>
  <p>🔄 Redirecionando...</p>
</body>
</html>
