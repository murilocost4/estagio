import { PiSiren } from "react-icons/pi";
import { TbBuildingHospital } from "react-icons/tb";
import { LuPartyPopper } from "react-icons/lu";
import { MdLocalPhone } from "react-icons/md";
import { FaWhatsapp, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { MdPlace } from "react-icons/md";
import React, { useState } from "react";
import {Header} from "../../components/Header";
import { Depoimento } from "../../components/Depoimento";
import Logo from '/images/costaambulancias.jpg'
import { Footer } from "../../components/Footer/Footer";
import { FooterDiv } from "../../components/Footer/FooterDiv";
import { FooterLink } from "../../components/Footer/FooterLink";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Duvida } from "../../components/Duvida";


export function Ambulancias() {

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

    return (
        <div className="relative">
        <Header>
            <img src={Logo} className="h-10"/>
        </Header>
        <main>
            <div>
                <section className="bg-slate-100 w-fit h-fit flex flex-col md:flex-row justify-center md:justify-evenly items-center text-center md:text-left gap-10 md:gap-16 py-36 px-8 md:px-40">
                    <div className="md:w-1/2 flex flex-col">
                        <h1 className="text-slate-900 text-5xl md:text-6xl font-bold mb-4">Emergências e remoções, conte com a Costa Ambulâncias</h1>
                        <p className="text-slate-500 text-xl mb-14">Atendimento rápido e especializado com cobertura 24 horas em Taquari e região.</p>
                        <nav className="flex gap-6">
                            <a href="#info"><Button title="Saiba Mais" isBlack={true}/></a>
                            <a href="#contact"><Button title="Contato" isBlack={false}/></a>
                        </nav>
                    </div>
                    <div className="md:w-1/2">
                        <img src="/images/ambulancia.jpg" alt="" className="h-full shadow-xl brightness-75"/>
                    </div>
                </section>
            </div>
            <section id="info" className="flex flex-col gap-20 bg-white w-full md:p-40 pb-32">
                <div className="md:w-1/2 mt-32 px-6 md:mt-0 md:px-6 text-center md:text-left">
                    <span className="text-4xl text-slate-700 font-semibold">Nossos Serviços</span>
                    <p className="text-slate-500 mt-6">Na Costa Ambulâncias, oferecemos uma ampla gama de serviços de transporte e resgate emergencial, sempre com profissionais qualificados e equipamentos de última geração:</p>
                </div>
                <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-center items-baseline md:justify-around px-6 md:px-0">
                    <div className="md:w-1/4 h-60 border border-slate-600/40 flex flex-col items-start text-left p-4 gap-2 shadow-md hover:border-blue-500 hover:shadow-blue-500/40 transition-all rounded-md">
                        <div className="p-4 rounded-full bg-blue-100 w-fit">
                            <PiSiren className="size-8 md:size-10 text-blue-600"/>
                        </div>
                        <span className="text-xl text-slate-700">Emergência 24h Horas</span>
                        <p className="text-slate-500">Atendimento imediato para situações críticas, com transporte rápido e seguro.</p>
                    </div>
                    <div className="md:w-1/4 h-60 border border-slate-600/40 flex flex-col items-start text-left p-4 gap-2 shadow-md hover:border-blue-500 hover:shadow-blue-500/40 transition-all rounded-md">
                        <div className="p-4 rounded-full bg-blue-100 w-fit">
                            <TbBuildingHospital className="size-8 md:size-10 text-blue-600"/>
                        </div>
                        <span className="text-xl text-slate-700">Transporte Inter-Hospitalar</span>
                        <p className="text-slate-500">Transferências seguras entre hospitais com suporte especializado.</p>
                    </div>
                    <div className="md:w-1/4 h-60 border border-slate-600/40 flex flex-col items-start text-left p-4 gap-2 shadow-md hover:border-blue-500 hover:shadow-blue-500/40 transition-all rounded-md">
                        <div className="p-4 rounded-full bg-blue-100 w-fit">
                            <LuPartyPopper className="size-8 md:size-10 text-blue-600"/>
                        </div>
                        <span className="text-xl text-slate-700">Cobertura de Eventos</span>
                        <p className="text-slate-500">Suporte de emergência em eventos de grande porte, garantindo a segurança de todos.</p>
                    </div>
                </div>
                <a href="#" className="mx-auto"><Button title="Entre em Contato"/></a>
            </section>
            <section className="bg-slate-100 w-full flex flex-col gap-24 pb-32 pt-44">
                <div className="md:mx-40 text-center">
                    <h2 className="text-4xl text-slate-800 font-semibold">Uma frota <span className="text-blue-600">moderna</span> e completa</h2>
                    <p className="text-slate-500 text-lg mt-2">Nossa frota é composta por veículos equipados com tecnologia de ponta, prontos para lidar com qualquer situação de emergência.</p>
                </div>
                
                <div className="snap-x snap-mandatory flex gap-1 p-2 md:p-8 w-full">
                    <div className="snap-center w-full">
                        <img src="/images/ambulancia.jpg" alt="" className="object-cover md:saturate-0 hover:saturate-100 hover:-translate-y-1 transition-all duration-300 ease-in-out h-96 w-max snap-center"/>
                    </div>
                    <div className="snap-center w-full">
                        <img src="/images/ambulancia.jpg" alt="" className="object-cover md:saturate-0 hover:saturate-100 hover:-translate-y-1 transition-all duration-300 ease-in-out h-96 snap-center"/>
                    </div>
                    <div className="snap-center w-full">
                        <img src="/images/ambulancia.jpg" alt="" className="object-cover md:saturate-0 hover:saturate-100 hover:-translate-y-1 transition-all duration-300 ease-in-out h-96 snap-center"/>
                    </div>
                    <div className="snap-center w-full">
                        <img src="/images/ambulancia.jpg" alt="" className="object-cover md:saturate-0 hover:saturate-100 hover:-translate-y-1 transition-all duration-300 ease-in-out h-96 snap-center"/>
                    </div>
                    <div className="snap-center w-full">
                        <img src="/images/ambulancia.jpg" alt="" className="object-cover md:saturate-0 hover:saturate-100 hover:-translate-y-1 transition-all duration-300 ease-in-out h-96 snap-center"/>
                    </div>
                    <div className="snap-center w-full">
                        <img src="/images/ambulancia.jpg" alt="" className="object-cover md:saturate-0 hover:saturate-100 hover:-translate-y-1 transition-all duration-300 ease-in-out h-96 snap-center"/>
                    </div>
                </div>

            </section>
            <section className="bg-white flex flex-col gap-16 justify-center items-center py-32 px-4 md:px-0">
                <div className="text-center md:text-left md:w-1/3">
                    <h3 className="text-4xl text-slate-800 font-semibold mb-4">Emergência a Qualquer Hora do Dia ou da Noite</h3>
                    <p className="text-lg text-slate-600">Estamos à disposição 24 horas por dia, 7 dias por semana, para garantir a sua segurança. Basta ligar para nossa central de atendimento, e uma ambulância estará a caminho.</p>
                </div>
                <div className="flex flex-col justify-center items-center md:justify-start md:items-start w-80">
                    <button className="text-blue hover:before:bg-redborder-red-500 relative h-[50px] w-full overflow-hidden border border-slate-400/40 bg-transparent px-3 text-slate-800 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-slate-800 before:transition-all before:duration-500 hover:text-white hover:shadow-slate-500 hover:before:left-0 hover:before:w-full mt-2"><span class="relative z-10">Acionar Equipe</span></button>
                </div>
            </section>
            <section className="bg-slate-100 flex flex-col justify-center py-32 px-4 md:px-0 gap-16">
                <div className="flex flex-col gap-6 text-center">
                    <span className="text-4xl text-slate-800 font-semibold">O que nossos clientes falam</span>
                    <p className="text-slate-600 text-lg">Nossa prioridade é garantir o atendimento mais eficiente e seguro possível. Veja o que nossos clientes têm a dizer:</p>
                </div>
                <div className="flex flex-col md:flex-row justify- items-center md:justify-around gap-12 md:gap-0">
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
            <section className="text-center md:text-left flex flex-col py-32 px-4 md:p-40 gap-16 bg-white">
                <span className="text-3xl text-slate-900 font-semibold mx-auto">Dúvidas frequentes</span>
                <div className="flex flex-col md:flex-row justify-center items-center md:items-baseline md:justify-around gap-12 md:gap-10">
                    <Duvida 
                        title="Quanto tempo demora para uma ambulância chegar?"
                        text="O tempo de resposta depende da localização, mas nossas equipes estão estrategicamente posicionadas para garantir atendimento rápido em Taquari e região."
                    />
                    <Duvida 
                        title="O serviço é coberto para clientes do Plano?"
                        text="Sim, em caso de emergências o transporte é gratuito para clientes do Plano Costa"
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
                        <input type="submit" value="Enviar" onClick={handleSubmit} className="border py-2 bg-slate-900 text-white cursor-pointer hover:bg-slate-700 transition-all"/>
                    </form>
                </FooterDiv>
            </Footer>
        </main>
        </div>
    )
}