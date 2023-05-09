const Carrot = ({rotation}: {rotation: number}) => {
    return (
        <div className="carrot" style={{ transform: `rotate(${rotation}deg)` }}>🥕</div>
    )
};

export default Carrot;
