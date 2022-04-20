import Image from '../Image'

const SimpleHeader = ({ title, image, transparent = false, className }) => (
  <header className={className}>
    {image &&
      <Image
        loading="eager"
        src={image}
        height="70h"
        width="100w"
        className="h-screen"
        objectFit="cover"
        layout="responsive"
      />
    }
    <div className="-mt-2 h-24 w-44 m-auto overflow-hidden" >
      <div className={`h-44 w-44 -mt-24 m-auto rounded-full bg-blue-900 ${transparent ? 'bg-transparent' : ''}`} />
    </div>
    <h2 className="text-5xl mt-6 font-bold m-auto text-center">{title}</h2>
  </header>
)

export default SimpleHeader;