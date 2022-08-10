import ContactUsForm from "./components/contactUsForm";

interface ContactUsProps{

}

const ContactUs = ({}: ContactUsProps) => (
  <>
    <div className='h-screen bg-gray-300 w-full '>
      <div className='container mx-auto my-5 p-5'>
        <div className='w-full h-64'>
          <ContactUsForm/>
        </div>
      </div>
    </div>
  </>
)

export default ContactUs


