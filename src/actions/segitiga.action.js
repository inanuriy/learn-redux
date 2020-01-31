export const INCREMENTSEGITIGA = "INCREMENTSEGITIGA";
export const DECREMENTSEGITIGA = "DECREMENTSEGITIGA";
export const LUASSEGITIGA = "LUASSEGITIGA";
export const KELILINGSEGITIGA = "KELILINGSEGITIGA";

export const addCountSegitiga = () => {
    return {
        type: INCREMENTSEGITIGA
    };
};

export const minusCountSegitiga = () => {
    return {
        type: DECREMENTSEGITIGA
    };
};

export const hitungLuasSegitiga = () => {
    return {
        type: LUASSEGITIGA
    };
};

export const hitungKelilingSegitiga = () => {
    return {
        type: KELILINGSEGITIGA
    };
};