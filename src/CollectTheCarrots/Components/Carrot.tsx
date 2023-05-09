const Carrot = () => {
    let rotation = Math.floor(Math.random() * 360);

    return (
        <div className="carrot" style={{transform: `rotate(${rotation}deg)`}}>🥕</div>
    )
};

export default Carrot;
