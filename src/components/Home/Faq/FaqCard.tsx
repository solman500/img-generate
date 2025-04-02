import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqCard = () => {
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="md:text-xl lg:text-2xl">Is it accessible?</AccordionTrigger>
          <AccordionContent className="md:text-lg text-base ">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="md:text-xl lg:text-2xl">Is it Styled?</AccordionTrigger>
          <AccordionContent className="md:text-lg text-base ">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="md:text-xl lg:text-2xl">Is it animated?</AccordionTrigger>
          <AccordionContent className="md:text-lg text-base ">
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

      </Accordion>

           
    </>
  );
};

export default FaqCard;
