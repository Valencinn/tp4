export default function Mousepad({
    imgSrc,     // Imagen que mostrará el mousepad
    className, // Clases opcionales que le pasemos desde afuera
    ...props
}) {
    return (
        <div
            className={`relative overflow-hidden ${className || ""}`}
            {...props}
        >
            {/* 
        imagen personalizada ocupa el template
      */}
            <div className="absolute inset-0 z-0">
                <img
                    src={imgSrc}
                    alt="Custom mousepad"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* 
        debe ser png con transparencia
      */}
            <img
                src="images/mousepad-template.png"
                alt="Mousepad template"
                className="relative z-10 select-none w-full"
            />
        </div>
    );
}