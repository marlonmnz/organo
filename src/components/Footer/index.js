import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='social'>
        <a
          href='https://www.facebook.com/soueu.marlon/'
          target='_blank'
          rel='noreferrer'
        >          
          <img src='/imagens/fb.png' alt='Facebook' />
        </a>
        <a href='https://www.twitter.com/soueu_marlon' 
          target='_blank'
          rel='noreferrer'
        >
          <img src='/imagens/tw.png' alt='Twitter' />
        </a>
        <a href='https://www.instagram.com/soueu_marlon'
          target='_blank'
          rel='noreferrer'
        >
          <img src='/imagens/ig.png' alt='Instagram' />
        </a>
      </div>
      <div className='logo'>
        <img src='/imagens/logo.png' alt='Organo' />
      </div>
      <div className='texto'>
        <p>Desenvolvido por Marlon</p>
      </div>
    </footer>
  );
}

export default Footer