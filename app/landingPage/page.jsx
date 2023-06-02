import Image from 'next/image'

const landingPage = () => {
  return (
    <>
        <Image
         src={'/assets/icons/chaga.png'}
         alt="autor"
         width={150}
         height={100}
        />
         <Image
         src={'/assets/icons/krasnica.svg'}
         alt="autor"
         width={150}
         height={100}
        />
         <Image
         src={'/assets/icons/smrcak icon.png'}
         alt="autor"
         width={150}
         height={100}
        />
    </>
  )
}

export default landingPage