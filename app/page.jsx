export default function Home() {
  return (
    <main style={{fontFamily:'Arial', background:'#000', color:'#fff', minHeight:'100vh', padding:'40px'}}>
      <h1 style={{color:'#facc15'}}>Pneus Brasil</h1>
      <p>Troca de pneus • Calibragem de rodas • Orçamento grátis</p>
      <h2>Tabela de Serviços</h2>
      <ul>
        <li>Troca de Pneus - Desde €15</li>
        <li>Calibragem de Rodas - Desde €20</li>
        <li>Alinhamento - Desde €25</li>
      </ul>
      <p><strong>WhatsApp:</strong> +351 963 075 447</p>
      <p><strong>Email:</strong> contato@pneusbrasil.pt</p>
      <p><strong>Horário:</strong> Segunda a Sábado - 08h às 18h</p>
      <a href="https://wa.me/351963075447">Falar no WhatsApp</a>
    </main>
  );
}