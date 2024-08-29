type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends keyof AllType, U extends keyof AllType>(
  top: Pick<AllType, T>,
  bottom: Pick<AllType, U>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
