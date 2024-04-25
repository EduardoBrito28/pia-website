import faq from '../../../assets/HomeImages/faq.jpg'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion'

export function Faq() {
    return (
        <div className="w-full py-32 flex flex-row items-center justify-center gap-20">
            <div data-aos="fade-down" className="flex flex-col w-[600px] gap-5 items-start justify-center">
                <h1>Perguntas Frequentes</h1>
                <p>Alguma dúvida? Veja abaixo as perguntas mais frequentes em relação a adesão e utilização da plataforma P.I.A</p>
                <Accordion type="single" collapsible className="w-full">
                    

                    <AccordionItem value="item-1">
                        <AccordionTrigger>O que é o P.I.A?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>


                    <AccordionItem value="item-2">
                        <AccordionTrigger>Qual é o público alvo do P.I.A?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>


                    <AccordionItem value="item-3">
                        <AccordionTrigger>Quais são as condições de acesso ao P.I.A para Instituições?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                        </AccordionContent>
                    </AccordionItem>


                    <AccordionItem value="item-4">
                        <AccordionTrigger>Quais são as condições de acesso ao P.I.A para pessoas individuais?</AccordionTrigger>
                        <AccordionContent>
                            Yes. It&apos;s animated by default, but you can disable it if you
                            prefer.
                        </AccordionContent>
                    </AccordionItem>


                </Accordion>

            </div>
            <div data-aos-delay="400" data-aos="fade-left" className="w-[600px] bg-gray-600 h-60 flex items-center justify-center">
                <img src={faq} alt="Frequently Asked Questions" />
            </div>
        </div>
    )
}