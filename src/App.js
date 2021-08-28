import React,{ useState } from 'react'
import style from './app.module.css';

const App = () => {
  const [lista,setLista] = useState(
    [{
      titulo:'Jogos Vorazes',
      autor: 'Suzanne Collins',
      sinopse:"Na região antigamente conhecida como América do Norte, a Capital de Panem controla 12 distritos e os força a escolher um garoto e uma garota, conhecidos como tributos, para competir em um evento anual televisionado.",
      imagemUrl: 'https://m.media-amazon.com/images/I/412YcnhZs1L.jpg',
      link:'https://www.youtube.com/watch?v=iiGm3Sd5A8o'
    },
    {
      titulo:'Stranger Things: Raízes Do Mal',
      autor:'Gwenda Bond',
      sinopse:'Primeira história oficial do universo expandido de Stranger Things. Descubra o passado sombrio da mãe de Eleven e do médico perverso envolvido no projeto MKULTRA.',
      imagemUrl: 'https://lh3.googleusercontent.com/proxy/RCF2zJVvx9xa2S04yHng9we_Yv2p8a1A-iP1ebSeihjE1ElrFyWOQsFRYTADzhGcX7DZ8589wCFoA3OUximpxuZb7Byuo4fp8K23Sj1s8v_ArZtSTzYKY4-hyNwGRMczIK0WbdEu',
      link:'https://www.youtube.com/watch?v=gM5OVZtq8xM'
    }
  ]
  );
  const [titulo,setTitulo] = useState('');
  const [autor,setAutor] = useState('');
  const [sinopse,setSinopse] = useState('');
  const [imagemUrl,setImagemUrl] = useState('');
  const [link,setLink] = useState('');

  const Enviar=(e)=>{
    e.preventDefault();
    setLista([
      ...lista,{
        titulo:titulo,
        autor:autor,
        sinopse:sinopse,
        imagemUrl:imagemUrl,
        link:link
      }
    ])
    setTitulo('')
    setAutor('')
    setSinopse('')
    setImagemUrl('')
    setLink('')
  }
  const Deletar = (index) => {
    setLista(lista.filter((livro,indexLivro)=>
        index!==indexLivro
      ))
  }
  
  return(
    <div>
      <div className={style.menu}>
        <h4>Livraria Blue</h4>
      </div>
      <form onSubmit={Enviar} className={style.forms}>
        <label>Titulo</label>
        <input type="text" value = {titulo} onChange={(e)=>(setTitulo(e.target.value))}></input>
        <label>Autor</label>
        <input type="text" value = {autor} onChange={(e)=>(setAutor(e.target.value))}></input>
        <label>Sinopse</label>
        <textarea type="text" value = {sinopse} onChange={(e)=>(setSinopse(e.target.value))}></textarea>
        <label>URL da Imagem</label>
        <input type="text" value={imagemUrl} onChange={(e)=>(setImagemUrl(e.target.value))}></input>
        <label>Link</label>
        <input type="text" value={link} onChange={(e)=>(setLink(e.target.value))}></input>
        <button type="submit">ENVIAR</button>
      </form>
      <ul >
        {lista.map((lista,index) => (
          <li key={index} className={style.livro}>
            <h1>{lista.titulo}</h1>
            <h2>{lista.autor}</h2>
            <p>{lista.sinopse}</p>
            <a href={lista.link} target="_blank"><img src={lista.imagemUrl}></img></a> 
            <button type="submit" onClick={()=>Deletar(index)}>DELETAR</button>
          </li>
        ))}
      </ul>
      <h3>Nossa Localização</h3>
      <div className={style.iframe}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14665.89578598585!2d-45.891641596416484!3d-23.22583434293703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7abec62742365b72!2sLivrarias%20Curitiba!5e0!3m2!1spt-BR!2sbr!4v1630167609873!5m2!1spt-BR!2sbr"  allowfullscreen="" loading="lazy"></iframe>
      </div> 
    </div>
  );
}

export default App;
