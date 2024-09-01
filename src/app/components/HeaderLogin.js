export default function HeaderLogin() {
  return (
    <>
      <header 
        className="relative w-full h-auto bg-black flex justify-center items-center"
        style={{
          height: "300px",
        }}
      >
        <h1
          className="text-7xl py-7 tracking-wide flex justify-center"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <object
            type="image/svg+xml"
            data="/svg/logo_vetor.svg"
            className="w-[80%] sm:w-[400px] h-auto mx-auto"
          >
            Seu navegador não suporta SVG.
          </object>
        </h1>
      </header>
    </>
  );
}
