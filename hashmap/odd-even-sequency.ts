
function maxDifference(s: string): number {
    const characters = s.split("");

    const mapResult = new Map<string, number>();

    for (const character of characters) {
        const charQuantity = mapResult.get(character);
        if (charQuantity) {
            mapResult.set(character, charQuantity+1);
            continue;
        }

        mapResult.set(character, 1);
    }

    let odd = 1;
    let even = s.length;

    mapResult.forEach((value, _) => {
      if (isEven(value)) {
        even = Math.min(even, value)
      }

      if (!isEven(value)) {
        odd = Math.max(odd, value)
      }
    })

    const result = odd - even;
    return result;
};

function isEven(value: number) {
    if (value % 2 === 0) {
        return true
    }

    return false
}