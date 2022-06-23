import logo from "../styles/logo.svg";

export function Subscribe() {
  return (
    <div className="min-h-screen  bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <img src={logo} alt="logo" />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero com <strong className="text-blue-500">React JS</strong>
          </h1>
        </div>

        <p className="mt-4 text-gray-200 leading-relaxed">
          Aprender varias tecnologias em apenas uma semana
        </p>

        <div className="p-8 bg-gray-700 border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se Gratuitamente</strong>

          <form action="" className="flex flex-col gap-2 w-full">

            <input type="text" className=" bg-gray-900 rounded px-5 h-14"
            placeholder="Seu nome completo"/>

            <input type="email" className="bg-gray-900 rounded px-5 h-14"
             placeholder="Digite seu e-mail"/>

          </form>
        </div>
      </div>

      <img src="/src/assets/background.png" className="mt-10" alt="" />
    </div>
  );
}
