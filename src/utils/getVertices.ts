

export const getVertices = (length: number, width: number, height: number,): Float32Array =>{
    return new Float32Array([
        -length / 2, -width / 2, -height / 2,     // A (0)
        length / 2, -width / 2, -height / 2,      // B (1)
        length / 2,  width / 2, -height / 2,      // C (2)
        -length / 2,  width / 2, -height / 2,     // D (3)
        -length / 2, -width / 2,  height / 2,     // E (4)
        length / 2, -width / 2,  height / 2,      // F (5)
        length / 2,  width / 2,  height / 2,      // G (6)
        -length / 2,  width / 2,  height / 2,     // H (7)
    ]);
}