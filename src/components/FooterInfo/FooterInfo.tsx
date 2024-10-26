const FooterInfo = ()=>{
    const date = new Date();
    const year = date.getFullYear();
    return(
        <div className="px-2 border-solid border-white/60 border-t-2 bg-transparent text-center flex flex-row items-center justify-center p-6 w-full h-[55px]">
            <p className="text-slate-100">Pixel Creatives @{year}</p>
        </div>
    )
}

export default  FooterInfo;
