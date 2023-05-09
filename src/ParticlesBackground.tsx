import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import particleOptions from "./fruitParticles.json"

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles id="tsparticles" options={particleOptions} init={particlesInit} />
    );
};

export default ParticlesBackground;
