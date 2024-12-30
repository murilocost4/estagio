import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Servico } from '../../components/luto/Servico'
import { Depoimento } from '../../components/Depoimento'
import { Footer } from '../../components/Footer/Footer'
import { FooterDiv } from '../../components/Footer/FooterDiv'
import { Input } from '../../components/Input'
import { FooterLink } from '../../components/Footer/FooterLink'
import { MdLocalPhone, MdPlace } from 'react-icons/md'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { FaFacebookSquare } from 'react-icons/fa'
import { useState } from 'react'

export function Funeraria() {

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        const nome = name;
        const fone = phone;
        const email = mail;
        const message = mensagem;

        fetch('https://api.sheetmonkey.io/form/iPN5hzCw2oFBLnStEx2sHH', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, fone, email, message }),
        }).then(() => alert('Dados Salvos'))
        .catch(error => console.error('Erro no envio dos dados', error))
    }

    return(
        <>
            <Header>

            </Header>
            <main>
                {/* Seção Hero */}
                <section>
                    <h1>Cuidando de cada detalhe com respeito e dignidade</h1>
                    <span>29 anos de vocação para o cuidar</span>
                    <div>
                        <Button title="Solicitar atendimento imediato"/>
                        <Button isBlack title="Conheça nossos serviços"/>
                    </div>
                </section>
                {/* Seção Sobre nós */}
                <section>
                    <span>Sobre nós</span>
                    <div>
                        <p>{/* Breve história da Funerária Costa e o compromisso com a excelência no atendimento. */}</p>
                        <img src="" alt="" /> {/* Foto da equipe, memorial da paz ou algum estabelecimento/serviço */}
                    </div>
                </section>
                {/* Seção Serviços */}
                <section>
                    <span>Serviços Oferecidos</span>
                    <div>
                        <Servico title="Planejamento Funerário"></Servico>
                    </div>
                </section>
                {/* Seção Depoimentos */}
                <section>
                    <span>O que nossos clientes dizem</span>
                    <div>
                        <Depoimento name="Fulano" text="Lorem ipsum dolor sit amet"/>
                    </div>
                </section>
                <Footer isGray>
                    <div className="flex flex-col md:flex-row gap-20 md:gap-20 w-full">
                        <FooterDiv title="Contato">
                            <FooterLink title="Travessa 14 de Julho, 30, Centro, Taquari, RS"><MdPlace className="size-6"/></FooterLink>
                            <FooterLink title="(51) 99999-9999"><MdLocalPhone className="size-6"/></FooterLink>
                            <FooterLink title="(51) 99999-9999"><FaWhatsapp className="size-6"/></FooterLink>
                        </FooterDiv>
                        <FooterDiv title="Redes Sociais">
                            <FooterLink link="https://instagram.com/funeraria.costa" title="@funeraria.costa"><FaInstagram className="size-6"/></FooterLink>
                            <FooterLink link="https://instagram.com/funeraria.costa" title="Funerária Costa"><FaFacebookSquare className="size-6"/></FooterLink>
                            <FooterLink ><FaWhatsapp className="size-6"/><button className="text-blue hover:before:bg-redborder-red-500 relative overflow-hidden border border-slate-500 bg-transparent backdrop-blur-sm px-2 py-1 text-slate-100 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-emerald-500 hover:border-emerald-500 before:transition-all before:duration-500 hover:text-white hover:shadow-emerald-500 hover:before:left-0 hover:before:w-full m-auto"><span className="relative z-10">Iniciar Conversa</span></button></FooterLink>
                        </FooterDiv>
                    </div>
                    <FooterDiv title="Fale Conosco">
                        <form name="formulario-contato" className="flex flex-col gap-4 w-full">
                            <Input type="text" name="name" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                            <Input type="text" name="fone" placeholder="Celular" onChange={(e) => setPhone(e.target.value)} />
                            <Input type="text" name="email" placeholder="Email" onChange={(e) => setMail(e.target.value)} />
                            <textarea rows="3" name="message" placeholder="Escreva uma mensagem" onChange={(e) => setMensagem(e.target.value)} className="bg-transparent p-2 border shadow-sm focus:outline-none focus:border-slate-400 resize-none"/>
                            <input type="submit" value="Enviar" onClick={handleSubmit} className="border py-2 bg-slate-900 text-white cursor-pointer hover:bg-slate-700 transition-all"/>
                        </form>
                    </FooterDiv>
                </Footer>
            </main>
        </>
    )
}