import AnimatedTextOnScroll from "../animations/AnimatedTextOnScroll";
import BaseWrapper from "../layout/BaseWrapper";

export default function Contact() {
  return (
   <section className='py-40  border border-red-500'>
      <BaseWrapper>
        <AnimatedTextOnScroll>
          <h2 className='text-6xl  text-center font-rubik font-bold leading-[1em]'>Your next project is currently a Word Document. I'm here to make it a Working Application.</h2>
        </AnimatedTextOnScroll>
      </BaseWrapper>
    </section>
  )
}
