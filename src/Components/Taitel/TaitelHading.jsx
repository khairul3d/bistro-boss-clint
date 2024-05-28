

const TaitelHading = ({hadding, subTitel}) => {
    return (
        <div className=" md:w-4/12 mx-auto text-center my-8">
            <p className=" text-yellow-600 mb-3">---{subTitel}---</p>
            <h1 className=" text-4xl uppercase border-y-2 py-3">{hadding}</h1>
        </div>
    );
};

export default TaitelHading;