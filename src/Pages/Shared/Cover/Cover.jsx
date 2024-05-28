import { Parallax, } from 'react-parallax';

const Cover = ({ img, hadding }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >

      <div className="hero min-h-[500px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md  bg-slate-700 bg-opacity-50 p-4 rounded-lg">
            <h1 className="mb-5 text-5xl font-bold uppercase">{hadding}</h1>
            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
        </div>
      </div>
    </Parallax>

  );
};

export default Cover;