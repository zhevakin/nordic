import { useForm } from 'react-hook-form'

function TextInput({ onSubmit }) {
  const { register, handleSubmit } = useForm()

  const onFormSubmit = data => {
    onSubmit(data.message)
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div>
        <div>
         <input
           {...register('name')}
         />
        </div>
        <textarea
          cols="30"
          rows="5"
          // value={}
          // onChange={}
          {...register('message')}
        />
      </div>
      <button>Отправить</button>
    </form>
  )
}

export default TextInput
