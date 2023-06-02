import Image from "next/image"

const Home = () => {
  return (
<>
<div className="hero min-h-screen" style={{ backgroundImage: `url("/assets/images/1130829.jpg")` }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-7xl font-bold">Dobrodošli u šumu!</h1>
      <p className="mb-5">Na ovom mestu možete otkriti čudestan svet gljiva i bezbedno probati skrivene ukuse naših šuma.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
    <div className="image_hero">
    <Image
    src={'/assets/icons/lisicarka.png'}
    alt="lisicarka"
    width={800}
    height={1000}
    />
    </div>
</div>
<div className="flex">
  <div className="relative w-4/6 h-64">
    <div className="absolute inset-y-10 left-12">
      <Image
      src={'/assets/icons/vrganji.png'}
      alt="autor"
      width={150}
      height={100}
      />
   </div>
   <br/>
    <p className="absolute inset-y-12 right-3">Wild Bite je jedinstvena internet pijaca oformljena oko ideje da spoji poznavaoce gljiva i ljubitelje istih.<br/>
        Na ovom mestu sertifikovani determinatori gljiva mogu ponuditi šumske vrste pečuraka<br/>
        koje imaju dostupne a zainteresovani ljudi mogu bezbedno da uživaju u ovim šumskim plodovima.<br/>
        Ovde ćete moći i da naučite štošta o gljivama preko stručnih tekstova<br/>
        kao i da otkrijete najbolje načine za pripremu kako bi gastronomski doživljaj bio potpun.
    </p>
  </div>
  </div>
  <section className="max-w-full	max-h-44 flex flex-row">
    <>  
    <div className="basis-1/4 object-center">
         
        </div>
        <div className="basis-1/4 object-center">
          <Image
          src={'/assets/icons/chaga.png'}
          alt="autor"
          width={120}
          height={100}
          />
          <br/>
          <br/>
          <br/>
          <p>chaga</p>
        </div>
        <div className="basis-1/4 object-center">
          <Image
          src={'/assets/icons/krasnica.svg'}
          alt="autor"
          width={120}
          height={100}
          />
          <br/>
          <br/>
          <p>krasnica</p>
        </div>
        <div className="basis-1/4 object-center -top-4 ">
          <Image
          src={'/assets/icons/smrcak icon.png'}
          alt="autor"
          width={100}
          height={100}
          />
          <p>smrcak</p>
        </div>
    </>
  </section>
</>
  )
}

export default Home