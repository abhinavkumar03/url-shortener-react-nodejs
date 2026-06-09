
export default function CallToAction() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return <section className="cta padding-xy flex flex-col justify-center items-stretch gap-4">
        <h2 className='text-white font-bold text-2xl text-center'>Shorten your link now</h2>
        <button type="button" className="btn-cta rounded-full self-center" onClick={scrollToTop}>Get Started</button>
    </section>
}