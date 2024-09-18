export const getVertices = (
  length: number,
  width: number,
  height: number,
): Float32Array => {
  return new Float32Array([
    -width / 2,
    -height / 2,
    -length / 2, // A (0)
    width / 2,
    -height / 2,
    -length / 2, // B (1)
    width / 2,
    height / 2,
    -length / 2, // C (2)
    -width / 2,
    height / 2,
    -length / 2, // D (3)
    -width / 2,
    -height / 2,
    length / 2, // E (4)
    width / 2,
    -height / 2,
    length / 2, // F (5)
    width / 2,
    height / 2,
    length / 2, // G (6)
    -width / 2,
    height / 2,
    length / 2, // H (7)
  ]);
};
