import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../styles/logo.svg";

const CREATE_SUBCRIBER_MUTATION = gql`
  mutation MyMutation ($name:String!, $email:String!){
  createSubscriber(data: {name: $name, email: $email}) {
    id
  }
}
`

export function Subscribe() {

  const navigate  = useNavigate()

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')

  const [createSubscriber, {loading}] = useMutation(CREATE_SUBCRIBER_MUTATION)
  
  async function handleSubscribe(event:FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables:{
        name,
        email
      }
    })

    navigate('/event')
  }

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

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full opacity-50">

            <input type="text" className=" bg-gray-900 rounded px-5 h-14"
            placeholder="Seu nome completo"
            onChange={event => setName(event.target.value)}
            />

            <input type="email" className="bg-gray-900 rounded px-5 h-14"
             placeholder="Digite seu e-mail"
             onChange={event => setEmail(event.target.value)}
             />


             <button type="submit"
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover-bg-green-700 transition-colors"
             >
              Garantir minha vaga
             </button>

          </form>
        </div>
      </div>

      <img src="/src/assets/background.png" className="mt-10" alt="" />
    </div>
  );
}
