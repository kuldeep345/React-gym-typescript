import Logo from '../../assets/Logo.png'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
      <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
          <div className='mt-16 basis-1/2 md:mt-0'>
            <img alt='logo' src={Logo}/>
            <p className='my-5'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, fugiat tempore. Dolorem, reiciendis dolore illo architecto molestiae dolor corrupti alias odit obcaecati sed tenetur vel harum consequatur tempora iste repellat?
            </p>
            <p>© Evogym All Rights Reserved.</p>
          </div>
          <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <p className='my-5'>Lorem, ipsum dolor.</p>
            <p className='my-5'>Lorem, ipsum dolor.lorem</p>
            <p>LoremIpsum illum.</p>
          </div>
          <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <p className='my-5'>Lorem, ipsum dolor.</p>
            <p className='my-5'>Lorem, ipsum dolor.lorem</p>
            <p>LoremIpsum illum.</p>
          </div>
          <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Contact Us</h4>
            <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, autem.</p>
            <p>+919914759117</p>
          </div>
      </div>
    </footer>
  )
}

export default Footer