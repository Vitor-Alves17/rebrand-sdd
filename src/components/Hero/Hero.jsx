import './style.scss'

export const Hero = () => {

    return (
        <main>
            <section className="text-conatiner">
                <div className="text-wrapper">
                    <h1>Transformamos o seu negócio com <span>tecnologia inteligente</span></h1>
                    <p>Soluções integradas em design, software, automação e
                        capacitação para empresas que buscam alta performance e
                        precisão técnica, com o frescor de uma manhã de domingo.</p>
                </div>
                <div className="button-wrapper">
                    <a className='highlighted-button' href="">Solicitar Orçamento</a>
                    <a href="">Ver Portifólio</a>
                </div>
            </section>
            <div className="visual-wrapper">
                <img src="" alt=""/>
                <div className="status">
                    <div className="status-point"></div>
                    <p>Status: Active Development</p>
                </div>
            </div>
        </main>
    )
}