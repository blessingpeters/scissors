import React, { useState } from 'react'
type FAQData = {
    question: string;
    answer: string;
};

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs: FAQData[] = [
        {
            question: "How does URL shortening work?",
            answer: "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.            ",
        },
        {
            question: "Is it necessary to create an account to use the URL shortening service?",
            answer: "It's a component that displays a list of questions and allows the user to expand/collapse the answers.",
        },
        {
            question: "Are the shortened links permanent? Will they expire?",
            answer: "It's a component that displays a list of questions and allows the user to expand/collapse the answers.",
        },
        {
            question: "Are there any limitations on the number of URLs I can shorten?",
            answer: "It's a component that displays a list of questions and allows the user to expand/collapse the answers.",
        },
        {
            question: "Can I customize the shortened URLs to reflect my brand or content?",
            answer: "It's a component that displays a list of questions and allows the user to expand/collapse the answers.",
        },
        {
            question: "Can I track the performance of my shortened URLs?",
            answer: "It's a component that displays a list of questions and allows the user to expand/collapse the answers.",
        },
        {
            question: "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
            answer: "It's a component that displays a list of questions and allows the user to expand/collapse the answers.",
        },
        {
            question: "What is a QR code and what can it do?",
            answer: "Simply click on a question to view its answer. Clicking on the question again will hide the answer.",
        },
        {
            question: "Is there an API available for integrating the URL shortening service into my own applications or websites?",
            answer: "Yes, you can style it with CSS and expand its functionality with React and TypeScript.",
        },
    ];

    return (
        <section className='flex flex-col justify-center items-center py-20 md:px-10 max-md:px-3'>
            <h2 className="text-4xl font-semibold pl-4 leading-snug border-l-4 border-slate-800 border-spacing-2">FAQs</h2>
            <div>
                {faqs.map((faq, index) => (
                    <div key={index} className='max-w-[792px] border-b border-gray-500'>
                        <div className='flex justify-between py-5' onClick={() => setActiveIndex(index === activeIndex ? null : index)}>
                            <h3>{faq.question}</h3>
                            <h3 className='flex text-4xl font-extralight'>{index === activeIndex ? '-' : '+'}</h3>
                        </div>
                        <div style={{ display: index === activeIndex ? 'block' : 'none' }}>
                            <p>{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Faq
