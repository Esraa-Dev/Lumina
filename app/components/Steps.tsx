export const Steps = () => {
    const steps = [
        { title: "Describe Your Vision", desc: "Type a phrase that describes the image you want to create." },
        { title: "Watch the Magic", desc: "AI transforms your text into a high-quality image in seconds." },
        { title: "Download & Share", desc: "Instantly download or share your creation." }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 container py-8">
            {steps.map((step, index) => (
                <div key={index} className="relative">
                    <div className="bg-white/5 p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-white/10 h-full">
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white/10 mb-3 sm:mb-4">{index + 1}</div>
                        <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 sm:mb-3">{step.title}</h3>
                        <p className="text-white/60 text-xs sm:text-sm">{step.desc}</p>
                    </div>
                    <>
                        <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-white/20"></div>
                        <div className="hidden sm:block lg:hidden absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-white/20"></div>
                    </>
                    <div className="sm:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-0.5 h-4 bg-white/20"></div>
                </div>
            ))}
        </div>
    );
};