import Logo from "./Logo";

export default function HeaderLogin() {
  return (
    <>
      <header 
        className="relative w-full h-auto bg-black flex justify-center items-center"
        style={{
          height: "300px",
        }}
      >
       <Logo/>
      </header>
    </>
  );
}
