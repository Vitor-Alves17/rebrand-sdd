import './style.scss'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="content-wrapper">
                <div className="main">
                    <h4>Suporte de Domingo</h4>
                    <p>A Kinetic Curator. Elevando o padrão
                        técnico através da precisão e do design
                        editorial caloroso.</p>
                    <div className="icons-wrapper">
                        <a href=""></a>
                        <a href=""></a>
                    </div>
                    </div>
                <div className="explore">
                    <h5>explore</h5>
                    <div className="text-separetion">
                        <a href="">Soluções</a>
                        <a href="">Projetos</a>
                        <a href="">Serviços</a>
                        <a href="">Blog</a>
                    </div>

                </div>
                <div className="legal">
                    <h5>legal</h5>
                    <div className="text-separetion">
                        <a href="">Privacy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Service Status</a>
                        <a href="">Careers</a>
                    </div>

                </div>
                <div className="contact">
                    <h5>inovação</h5>
                    <p>Inscreva-se para receber curadoria de
                        tendências tecnológicas.</p>

                    <div className="button-wrapper">
                        <input type="text" placeholder='Seu e-mail'/>
                        <button></button>
                    </div>
                </div>
            </div>

            <div className="small-letters">
                <p>© 2024 Suporte de Domingo</p>
            </div>
        </footer>
    )
}