import { useState } from 'react'

type ContactUsProps = React.HTMLAttributes<HTMLDivElement> & {
  deferred?: any[]
}

export default function ContactUs({ ...deferred }: ContactUsProps) {
  const { className = '', ...rest } = deferred
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = () => {
    let formData = {
      name,
      email,
      phoneNumber,
      message,
    }
    let json = JSON.stringify(formData)

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json()
        if (response.status == 200) {
          console.log(json)
        } else {
          console.log(json)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <div className='h-screen bg-gray-300 w-full '>
        <div className='flex items-center min-h-screen'>
          <div className='container mx-auto'>
            <div className='max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm'>
              <div className='text-center'>
                <h1 className='my-3 text-3xl font-semibold text-gray-700'>
                  Contact Us
                </h1>
                <p className='text-gray-400'>
                  Fill up the form below to send us a message.
                </p>
              </div>
              <div className='m-7'>
                <form
                  action='https://api.web3forms.com/submit'
                  method='POST'
                  id='form'
                  onSubmit={handleSubmit}>
                  <input
                    type='hidden'
                    name='apikey'
                    value='7da4c281-f652-4462-9f1e-06713d7c9c50'></input>
                  <input
                    type='hidden'
                    name='subject'
                    value='New Submission from Web3Forms'></input>

                  <div className='mb-6'>
                    <label
                      htmlFor='name'
                      className='block mb-2 text-sm text-gray-600 dark:text-gray-400'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      onChange={(e) => {
                        setName(e.target.value)
                      }}
                      name='name'
                      id='name'
                      placeholder='John Doe'
                      required
                      className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 '></input>
                  </div>
                  <div className='mb-6'>
                    <label
                      htmlFor='email'
                      className='block mb-2 text-sm text-gray-600 dark:text-gray-400'>
                      Email Address
                    </label>
                    <input
                      type='email'
                      onChange={(e) => {
                        setEmail(e.target.value)
                      }}
                      name='email'
                      id='email'
                      placeholder='you@company.com'
                      required
                      className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300'></input>
                  </div>
                  <div className='mb-6'>
                    <label
                      htmlFor='phone'
                      className='text-sm text-gray-600 dark:text-gray-400'>
                      Phone Number
                    </label>
                    <input
                      type='text'
                      onChange={(e) => {
                        setPhoneNumber(e.target.value)
                      }}
                      name='phone'
                      id='phone'
                      placeholder='+1 (555) 1234-567'
                      required
                      className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300'></input>
                  </div>
                  <div className='mb-6'>
                    <label
                      htmlFor='message'
                      className='block mb-2 text-sm text-gray-600 dark:text-gray-400'>
                      Your Message
                    </label>
                    <textarea
                      name='message'
                      onChange={(e) => {
                        setMessage(e.target.value)
                      }}
                      id='message'
                      placeholder='Your Message'
                      className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300'
                      required></textarea>
                  </div>
                  <div className='mb-6'>
                    <button
                      type='submit'
                      className='w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'>
                      Send Message
                    </button>
                  </div>
                  <p
                    className='text-base text-center text-gray-400'
                    id='result'></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
