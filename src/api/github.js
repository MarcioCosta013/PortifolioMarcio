export default async function handler(req, res) {
    const token = process.env.GITHUB_TOKEN; // Token armazenado nas variáveis de ambiente da Vercel
  
    // Faça uma chamada para a API do GitHub
    const response = await fetch('https://api.github.com/MarcioCosta013', {
      headers: {
        Authorization: token,
      },
    });
  
    if (response.ok) {
      const data = await response.json();
      res.status(200).json(data); // Retorna o resultado como JSON
    } else {
      res.status(response.status).json({ error: 'Erro ao acessar a API do GitHub' });
    }
  }
  