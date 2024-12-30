import { Header } from "../../components/Header"
import React, { useState } from 'react'

import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { LuHeartPulse } from "react-icons/lu";
import { RiPsychotherapyLine } from "react-icons/ri";
import { LuBrain } from "react-icons/lu";

import { Especialidade } from "../../components/Especialidade";
import { Carousel } from "../../components/Carousel";
import { Input } from "../../components/Input";
import { Depoimento } from "../../components/Depoimento";
import { Button } from "../../components/Button";
import { Duvida } from "../../components/Duvida";
import { Footer } from "../../components/Footer/Footer";
import { FooterDiv } from "../../components/Footer/FooterDiv";
import { FooterLink } from "../../components/Footer/FooterLink";
import { MdLocalPhone, MdPlace } from "react-icons/md";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";


export function CentroClinico() {

    const [patient, setPatient] = useState("")
    const [solicitant, setSolicitant] = useState("")
    const [professional, setProfessional] = useState("")
    const [fone, setFone] = useState("")
    const [message, setMessage] = useState("")

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [mail, setMail] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleFormAgendamento = (event) => {
        event.preventDefault()
    }

    const handleFormContato = (event) => {
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
        <Header />
        <main>
            <section>
                <section className="bg-slate-100 saturate-100 w-vw h-dvh flex flex-col gap-12 justify-center items-center py-32 md:p-60 md:px-40 bg-cover text-center" >
                    <h1 className="text-4xl text-slate-900 font-bold md:text-6xl">Cuidado Completo e Personalizado para Sua Saúde no Centro Clínico Costa</h1>
                    <span className="text-slate-600 text-xl">Atendimentos de múltiplas especialidades em Taquari</span>
                    <a href="#info"><Button title="Agendar Agora" isBlack={true} /></a>
                </section>
            </section>
            <section id="info" className="px-4 py-24 md:p-40 text-center">
                <div className="flex flex-col md:justify-center items-center text-center gap-14">
                    <div className="flex flex-col gap-6 md:w-4/5">
                        <span className="text-5xl">Especialidades Médicas ao Seu Alcance</span>
                        <p className="text-slate-600 text-xl">O Centro Clínico Costa oferece uma vasta gama de especialidades médicas, com profissionais altamente qualificados prontos para cuidar de você e de sua família. Algumas das especialidades disponíveis são:</p>
                    </div>
                    <ul className="grid grid-flow-row md:grid-flow-col place-items-center grid-cols-1 gap-8 text-xl text-slate-700">
                        <Especialidade title="Clinica Geral"><LiaHandHoldingHeartSolid className="size-10 text-slate-700"/></Especialidade>
                        <Especialidade title="Cardiologia"><LuHeartPulse className="size-10 text-slate-700"/></Especialidade>
                        <Especialidade title="Psiquiatria"><RiPsychotherapyLine className="size-10 text-slate-700"/></Especialidade>
                        <Especialidade title="Neurologia"><LuBrain className="size-10 text-slate-700"/></Especialidade>
                        <Especialidade title="Ginecologia"><LiaHandHoldingHeartSolid className="size-10 text-slate-700"/></Especialidade>
                        <Especialidade title="Otorrinolaringologia"><LiaHandHoldingHeartSolid className="size-10 text-slate-700"/></Especialidade>
                    </ul>
                </div>
            </section>
            <section className="bg-slate-100 py-28 px-4">
                <Carousel />
            </section>
            <section className="bg-white flex flex-col md:flex-row p-4 md:p-32">
                <div className="flex flex-col gap-12 md:w-1/2 pr-10">
                    <p className="text-3xl">Agende sua Consulta de Forma Rápida e Fácil</p>
                    <p className="text-xl text-slate-600">No Centro Clínico Costa, oferecemos um sistema de agendamento online prático para que em apenas alguns cliques, você solicite o seu agendameto.</p>
                </div>
                <form name="formulario-contato" className="flex flex-col gap-4 w-1/2">
                    <Input type="text" name="patient" placeholder="Paciente" onChange={(e) => setPatient(e.target.value)} />
                    <Input type="text" name="solicitant" placeholder="Nome do responsável" onChange={(e) => setSolicitant(e.target.value)} />
                    <Input type="text" name="professional" placeholder="Profissional" onChange={(e) => setProfessional(e.target.value)} />
                    <Input type="text" name="fone" placeholder="Telefone" onChange={(e) => setFone(e.target.value)} />
                    <textarea rows="3" name="message" placeholder="Observações" onChange={(e) => setMessage(e.target.value)} className="p-2 border shadow-sm focus:outline-none focus:border-slate-400 resize-none"/>
                    <input type="submit" value="Enviar" onClick={handleFormAgendamento} className="border py-2 bg-slate-900 text-white cursor-pointer hover:bg-slate-700 transition-all"/>
                </form>
            </section>
            <section className="bg-slate-100 md:p-32">
                <p className="text-center text-4xl">O Que Nossos Pacientes Dizem</p>
                <p className="text-center text-xl mt-4 text-slate-600 md:w-2/3 m-auto">A confiança e o cuidado dos nossos pacientes são nossa maior motivação. Confira o que nossos pacientes têm a dizer sobre o atendimento no Centro Clínico Costa:</p>
                <div className="mt-12 flex flex-col md:flex-row gap-10">
                <Depoimento 
                    name="Fulano de Tal"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit doloremque ea iusto eos. Magnam, debitis blanditiis eos voluptatum."    
                />
                <Depoimento 
                    name="Fulano de Tal"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit doloremque ea iusto eos. Magnam, debitis blanditiis eos voluptatum."    
                />
                <Depoimento 
                    name="Fulano de Tal"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit doloremque ea iusto eos. Magnam, debitis blanditiis eos voluptatum."    
                />
                <Depoimento 
                    name="Fulano de Tal"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit doloremque ea iusto eos. Magnam, debitis blanditiis eos voluptatum."    
                />
                <Depoimento 
                    name="Fulano de Tal"
                    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit doloremque ea iusto eos. Magnam, debitis blanditiis eos voluptatum."    
                />
                </div>
            </section>
            <section className="bg-white flex flex-col md:p-32">
                <p className="text-4xl text-center">Infraestrutura Moderna e Confortável</p>
                <p className="text-xl text-center mt-4 text-slate-600">O Centro Clínico Costa conta com uma infraestrutura moderna, garantindo conforto e segurança para nossos pacientes. Nossas instalações incluem:</p>
                <div className="flex flex-col gap-16 mt-24">
                    <div className="flex gap-32 items-center">
                        <img src="https://placehold.co/600x400" alt="" className="md:w-4/10"/>
                        <span className="text-3xl text-slate-800">Consultórios Amplos e Equipados</span>
                    </div>
                    <div className="flex flex-row-reverse gap-32 items-center">
                        <img src="https://placehold.co/600x400" alt="" className="md:w-4/10"/>
                        <span className="text-3xl text-slate-800">Sala de Exames</span>
                    </div>
                    <div className="flex gap-32 items-center">
                        <img src="https://placehold.co/600x400" alt="" className="md:w-4/10"/>
                        <span className="text-3xl text-slate-800">Área de Atendimento de Psicologia</span>
                    </div>
                    <div className="flex flex-row-reverse gap-32 items-center">
                        <img src="https://placehold.co/600x400" alt="" className="md:w-4/10"/>
                        <span className="text-3xl text-slate-800">Acessibilidade para pessoas com mobilidade reduzida</span>
                    </div>
                </div>
            </section>
            <section className="text-center md:text-left flex flex-col py-32 px-4 md:p-40 gap-16 bg-slate-100">
                <span className="text-3xl text-slate-900 font-semibold mx-auto">Dúvidas Frequentes</span>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline md:justify-around gap-12 md:gap-16">
                    <Duvida
                        title="Qual é o horário de funcionamento do Centro Clínico Costa?"
                        text="Nosso horário de atendimento é de segunda a sexta das 08:00 ao meio dia e aos sábados das 09:00 as 11:45"
                    />
                    <Duvida
                        title="Como faço para agendar uma consulta?"
                        text='Você pode agendar diretamente pelo nosso site na seção "Agendamento Online", entrando em contato pelo WhatsApp ou via ligação telefônica.'
                    />
                </div>
            </section>
            <Footer>
                    <div className="flex flex-col md:flex-row gap-20 md:gap-20 w-full">
                        <FooterDiv title="Contato">
                            <FooterLink title="Rua Sete de Setembro, 2356, Centro, Taquari, RS"><MdPlace className="size-6"/></FooterLink>
                            <FooterLink title="(51) 99999-9999"><MdLocalPhone className="size-6"/></FooterLink>
                            <FooterLink title="(51) 99999-9999"><FaWhatsapp className="size-6"/></FooterLink>
                        </FooterDiv>
                        <FooterDiv title="Redes Sociais">
                            <FooterLink link="https://instagram.com/planocosta" title="@planocosta"><FaInstagram className="size-6"/></FooterLink>
                            <FooterLink link="https://instagram.com/costa.ambulancias" title="Plano Costa"><FaFacebookSquare className="size-6"/></FooterLink>
                            <FooterLink ><FaWhatsapp className="size-6"/><button className="text-blue hover:before:bg-redborder-red-500 relative overflow-hidden border border-slate-500 bg-transparent backdrop-blur-sm px-2 py-1 text-slate-800 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-emerald-500 hover:border-emerald-500 before:transition-all before:duration-500 hover:text-white hover:shadow-emerald-500 hover:before:left-0 hover:before:w-full m-auto"><span className="relative z-10">Iniciar Conversa</span></button></FooterLink>
                        </FooterDiv>
                    </div>
                    <FooterDiv title="Fale Conosco">
                        <form name="formulario-contato" className="flex flex-col gap-4 w-full">
                            <Input type="text" name="name" placeholder="Nome" onChange={(e) => setName(e.target.value)} />
                            <Input type="text" name="fone" placeholder="Celular" onChange={(e) => setPhone(e.target.value)} />
                            <Input type="text" name="email" placeholder="Email" onChange={(e) => setMail(e.target.value)} />
                            <textarea rows="3" name="message" placeholder="Escreva uma mensagem" onChange={(e) => setMensagem(e.target.value)} className="p-2 border shadow-sm focus:outline-none focus:border-slate-400 resize-none"/>
                            <input type="submit" value="Enviar" onClick={handleFormContato} className="border py-2 bg-slate-900 text-white cursor-pointer hover:bg-slate-700 transition-all"/>
                        </form>
                    </FooterDiv>
                </Footer>
        </main>
        </>
    )
}